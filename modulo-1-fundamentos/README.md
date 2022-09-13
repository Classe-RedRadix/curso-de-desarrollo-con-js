# Módulo 1 - Fundamentos

En este módulo fundamentamos los aspectos básicos de Javascript que es necesario entender para afrontar el contenido del curso.

## Contenido

- [Let vs const](#let-vs-const)
- [Tipos de datos](#tipos-de-datos)
- [Arrow functions](#arrow-functions)

## Let vs const

En el primer apartado del módulo de fundamentos exploramos las diferencias entre las diferentes formas de declarar variables en Javascript.

La conclusión final es:

- utilizamos `const` siempre que podamos
- utilizamos `let` en el resto de casos
- `var` es problemático y está obsoleto

##### Recursos

- [const > let](https://stackoverflow.com/questions/41086633/why-most-of-the-time-should-i-use-const-instead-of-let-in-javascript)
- [let > var](https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var)
- [variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#variable_hoisting)
- [hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#variable_hoisting)

## Tipos de datos

Repasaremos rápidamente algunos aspectos referentes a los tipos de datos en Javascript: valores, truthiness y comparación.

Es importante entender que los tipos simples como los números o las strings se comparan por valor. Como veremos en los próximos módulos, los tipos compuestos como _object_ se comparan por referencia.

##### Recursos

- [valores y tipos](https://eloquentjavascript.net/01_values.html)
- [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [comparación tipos compuestos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#comparing_objects)

## Arrow functions

Utilizaremos las arrow functions _constantemente_ durante el curso. Es imporante entender su funcionamiento y coger soltura con la sintaxis.

```javascript
// Typical function
function sum(a, b) {
  return a + b;
}

// Arrow function
const sum = (a, b) => a + b;
```

##### Recursos

- [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [más arrow functions](https://eloquentjavascript.net/03_functions.html#h_/G0LSjQxoo)
