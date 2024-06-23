# Ejercicio final

¡Felicidades! Has conseguido llegar al final del curso con vida. Tenemos la seguridad de que aprender a manejar las herramientas y conceptos que hemos tratado durante las clases te va a convertir en un usuario avanzado de JavaScript. Por supuesto, el viaje no termina aquí. El dominio del lenguaje no es la única variable en la carrera de un desarrollador de software. Hay otras dimensiones importantes: arquitectura, tooling, herramientas back-end o front-end, etc. Desde Classe te animamos a que sigas explorando esas otras vías y te recomendamos que le eches un vistazo al resto de cursos que ofrecemos.

Bueno, sabemos que el curso ha sido duro y que algunos ejercicios han sido verdaderamente complicados. Si te ha gustado el desafío y te sientes con fuerzas, te queremos plantear un reto final. Vas a implementar tu propio async/await (😱) o, como le vamos a llamar nosotros, asynk/yield. Es un ejercicio **DIFÍCIL** y **lleva tiempo**, lo sabemos, pero quien lo consiga podrá presumir de ello ;).

## Generadores

Para implementar async/await necesitamos introducir el concepto de _generador_. Los generadores son funciones especiales (`function*`) que detienen el flujo de ejecución cuando se hace `yield` de un valor. En ese momento devuelven el valor yieldeado y permiten reanudar la ejecución de la función mediante un método `next`. Veamos un ejemplo:

```javascript
// `counter` es un generador
function* counter() {
  print.log("Devolviendo 1...");
  yield 1;
  print.log("Devolviendo 2...");
  yield 2;
  print.log("Devolviendo 3...");
  yield 3;
}

// para utilizar un generador hay que instanciarlo
const generator = counter();

// para ejecutar el generador utilizamos `next`
print.log(generator.next().value); // hasta el primer yield y devuelve 1
print.log(generator.next().value); // hasta el segundo yield y devuelve 2

// ¡podemos retomar el flujo del generador cuando queramos!
setTimeout(() => {
  // Ejecuta el último bloque del generador y devuelve 3
  print.log(generator.next().value);
}, 1000);
```

Recomendamos ejecutar el código en la consola y experimentar con él para comprender el funcionamiento.

```javascript
// podemos comprobar si el generador ha terminado con `done`
const generator = counter();
print.log(generator.next().value); // 1
print.log(generator.next().value); // 2
print.log(generator.next().value); // 3

// `next` devuelve un objeto yielded con una propiedad `value` y una propiedad `done`
const yielded = generator.next();
print.log(yielded.value); // undefined
print.log(yielded.done); // true
```

Los generadores nos permiten hacer cosas interesantes, como generar un array infinito:

```javascript
// generador
function* evenNumberGenerator() {
  let number = 0;
  while (true) {
    number += 2;
    yield number;
  }
}

// instanciación
const evenNumbers = evenNumberGenerator();

// podemos llamar a next un número infinito de veces
print.log(evenNumbers.next().value);
print.log(evenNumbers.next().value);
print.log(evenNumbers.next().value);
```

El método `next` nos permite pasarle un valor que determinará qué devuelve yield dentro del generador. **Este concepto es importante para resolver el ejercicio final**.

```javascript
function* generator() {
  while (true) {
    const value = yield;
    print.log(value);
  }
}

const gen = generator();
g.next(1); // "{ value: null, done: false }"
// No hemos llegado al console.log: el valor de `next` se pierde

g.next(2); // "{ value: null, done: false }"
// console.log -> 2
```

Otra característica interesante de los generadores es que son iterables! Podemos utilizar bucles for of para recorrerlos.

### Recursos

- [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
- [Generator.next](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)
- [Generadores e iteradores](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)

## Ejercicio asynk/yield

El ejercicio consiste en implementar async/await utilizando generadores. Estos nos permiten _detener la ejecución del código_ y _retomarla cuando queramos_. ¡Justo lo que hace async/await!

Dada una función asíncrona...

```javascript
// Una función que devuelve un valor al cabo de `ms` milisegundos
function futureValue(value, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), ms);
  });
}
```

Veamos un ejemplo de async/await...

```javascript
async function main() {
  const one = await futureValue(1, 1000);
  print.log(one); // 1 -> al segundo
  const two = await futureValue(2, 1000);
  print.log(two); // 2 -> a los dos segundos
}

main();
```

En asynk/yield lo expresaríamos de esta forma:

```javascript
const main = asynk(function* () {
  const one = yield futureValue(1, 1000);
  print.log(one); // 1 -> al segundo
  const two = yield futureValue(2, 1000);
  print.log(two); // 2 -> a los dos segundos
});

main();
```

El ejercicio consiste en implementar la función `asynk`, que debe seguir estos pasos:

- recibe un generador que devuelve promesas
- devuelve una nueva función (recuerda que async recibe y devuelve una función)

Esa función debe seguir estos pasos:

1. instancia el generador
2. llama a `next`
3. Si el generador ha acabado devuelve
4. Si no, **recupera** la promesa yieldeada `<- generator.next(value)`
5. Espera la promesa
   - Si se rechaza, levanta una excepción
   - Si se resuelve, llama al siguiente `next` de **forma recursiva** y volvemos a empezar desde el paso 2

Recuerda que asynk espera que todos los yields devuelvan promesas. Si intentas yieldear un valor debes wrapearlo en una promesa: `const wrappedValue = Promise.resolve(value)`

Si quieres ir un paso más allá y poder anidar `asynk` asegurate de que asynk devuelva _una promesa_ que se resuelva al finalizar la ejecución del generador.

<details>
  <summary>Pista (-1 punto)</summary>
  
  ```javascript
function asynk(generator) {
  return function (...args) {
    const gen = generator(...args);

    function iterator(yielded) {
      return new Promise((resolve) => {
        // Si hemos llegado al final, devolvemos
        // Wrappeamos en caso de que yielded.value no sea una promesa
        // Resolvemos la promesa yieldeada con la siguiente llamada a `next`
      });
    }

    return iterator(gen.next());

    };

}

```

</details>
