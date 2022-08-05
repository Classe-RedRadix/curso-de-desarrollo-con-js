# Estructuras de datos I

En este modulo exploramos diferentes aspectos de las listas de Javascript:

- Arrays multidimensionales
- Iteración
- Recursividad
- Operaciones sobre listas
- Destructuring

El procesado de listas es una parte fundamental de la programación. Una prueba de la potencia de las listas es Lisp (LISt Processing), una familia relevante de lenguajes de programación, que basa toda su sintaxis y estructuras de datos en listas.

```scheme
(define (largest nums)
  (cond [(empty? (rest nums)) (first nums)]
        [(cons? (rest nums))
         (cond [(>= (first nums) (largest (rest nums)))
                (first nums)]
               [else
                (largest (rest nums))])
         ]))

(largest (list 1 2 3 4))
```

## Operaciones sobre listas

Como veremos durante el módulo, la gran parte de las operaciones que realizamos como programadores consiste en transformar datos. Concretamente, tres tipos de transformaciones: mapeados, filtrados y acumulados. Estas transformaciones están representadas en las funciones `map`, `filter` y `reduce` de Javascript y acostumbrarse a utilizarlas es una de las mejores estrategias para aumentar la velocidad de desarrollo y la legibilidad de nuestro código.

Adicionalmente, estas tres funciones básicas, junto con la recursividad y las funciones de primer orden (siguiente módulo), representan los pilares fundamentales de la programación funcional. Este estilo de programación es especialmente relevante en desarrollo web y tiene una influencia muy fuerte en frameworks modernos como _React_, _Angular_ y _Vue_.

Otras operaciones sobre listas que veremos son:

- [flatten](https://lodash.com/docs/4.17.15#flatten)
- [flattenDeep](https://lodash.com/docs/4.17.15#flattenDeep)
- [find](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [slice](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [difference](https://lodash.com/docs/4.17.15#difference)
- [union](https://lodash.com/docs/4.17.15#union)

Finalmente introducimos [Lodash](https://lodash.com/), una librería de utilidades de Javascript que incluye un gran número de operaciones sobre listas ya implementadas y permite acelerar considerablemente el desarrollo. En el apartado de listas recomendamos investigar las siguientes funciones en la [documentación](https://lodash.com/docs/4.17.15) de Lodash:

- [last](https://lodash.com/docs/4.17.15#last)
- [chunk](https://lodash.com/docs/4.17.15#chunk)
- [takeWhile](https://lodash.com/docs/4.17.15#takeWhile)
- [dropWhile](https://lodash.com/docs/4.17.15#dropWhile)
- [uniq](https://lodash.com/docs/4.17.15#uniq)
- [isEmpty](https://lodash.com/docs/4.17.15#isEmpty)

##### Recursos

- [map](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [reduce](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Lodash docs](https://lodash.com/docs/4.17.15)
- [Array iteration (vídeo)](https://www.youtube.com/watch?v=Urwzk6ILvPQ&t=1s&ab_channel=freeCodeCamp.org)
- [Estructuras de datos en profundidad](https://eloquentjavascript.net/04_data.html)
- [Introducción a la programación funcional](https://www.freecodecamp.org/news/an-introduction-to-the-basic-principles-of-functional-programming-a2c2a15c84/)

## Recursividad

Conforme avanzamos en el curso, nos encontramos un ejercicio (link) muy dificil de solucionar con las herramientas de iteración que utilizamos habitualmente: los bucles. El objetivo del problema es recorrer una estructura de datos en forma de árbol y en el momento en el que introducimos el concepto de la recursividad, la solución se vuelve mucho más sencilla.

![imagen](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Tree_%28computer_science%29.svg/1200px-Tree_%28computer_science%29.svg.png | width=600)

Las resolución de problemas mediante iteración siempre sigue la misma estructura y el primer paso es comprobar si el nodo actual es una rama o una hoja del árbol.

- Consideramos _hojas_ los nodos que no tienen descendientes
- Consideramos _ramas_ los nodos que tienen descendientes

El algoritmo es siempre el mismo:

```
- Es el nodo actual una hoja?
  - devolvemos el valor
- Es el nodo actual una rama?
  - devolvemos el resultado de aplicar la función recursiva a cada descendiente de la rama
```

Por ejemplo, si queremos imprimir todos los elementos de un árbol de listas:

```javascript
function printTree(node) {
  if (typeof node == "number") console.log(node);
  if (Array.isArray(node)) {
    for (let child of node) {
      printTree(child);
    }
  }
}

printTree([1, [2, 3], [[4, 5]]]);
```

La función `printTree` funciona correctamente aplicandose en cualquier punto del árbol. Desde la raíz hasta las hojas. Esa flexibilidad nos permite recorrer la estructura de árbol aunque no sepamos previamente sus dimensiones.

##### Recursos

- [Recursividad en profundidad](https://www.geeksforgeeks.org/recursion/)

## Destructuring

Las listas también nos permiten introducir el concepto de desestructuración. Esta práctica, que consiste en seleccionar partes de una lista o objeto, también es especialmente útil para acelerar el desarrollo y aumentar la legibilidad de nuestros programas.

La desestructuración de listas en Javascript se implementa a traves de la siguiente sintaxis:

```javascript
const [a, b, ...c] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(c); // [30, 40, 50]
```

En esta sección también vamos a ver los operadores _rest_ y _spread_. Estos nos facilitan la gestión de los parámetros de las funciones y extienden lo que somos capaces de hacer con ellos, por ejemplo, permitiéndonos implementar una función que recibe un número _indeterminado_ de parámetros.

```javascript
function sum(...args) {
  return args.reduce((acc, x) => acc + x, 0);
}
```

Volveremos a visitar el tema de la desestructuración durante el módulo de objetos (estructuras de datos II)

##### Recursos

- [Desestructuración](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Spread](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Rest](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/rest_parameters)
