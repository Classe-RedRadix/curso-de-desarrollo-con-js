# Asincronía II

En este módulo entramos más a fondo en la programación asíncrona en Javascript. Dejamos atrás los _callbacks_ para introducirnos en el uso de _promesas_ y _async/await_

## Promesas

En el apartado de promesas vemos cómo estas solucionan parcialmente dos de los problemas de la programación con callbacks: el callback hell y la gestión de errores engorrosa. El profesor explicará en detalle qué forma toman las promesas y como debemos utilizarlas para solucionar ambos problemas.

A lo largo de la sección se analizan varios conceptos:

- Los diferentes estados de una promesa
- Cómo encadenar promesas
- Cómo capturar errores
- Cómo paralelizarlas con Promise.All

Aprovechamos para resolver algunos de los ejercicios planteados en el ejercicio anterior y comprobar como, efectivamente, las promesas ponen solución a algunos de los inconvenientes de la programación con callbacks.

##### Recursos

- [Programación con promesas](https://eloquentjavascript.net/11_async.html#h_sdRy5CTAP/)
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [Promise.any](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
- [Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)

## Async/await

Finalmente, cerramos el curso viendo como async/await nos permite utilizar las promesas para tratar la asincronía como si fuera código síncrono. Esto nos permite solucionar todos los inconvenientes planteados por los callbacks y nos ayuda a razonar sobre el código con más facilidad.

Durante el apartado implementaremos varias funciones de utilidad que nos permiten simplificar la programación asíncrona:

- `asyncMap`
- `asyncSequentialMap`
- `asyncFilter`
- `asyncReduce`
- `promiseAllSafe`
- `retry`

También vemos como mediante async/await volvemos a poder utilizar los bloques try/catch para capturar errores.

##### Recursos

- [async/await](https://javascript.info/async-await)
- [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function#syntax)
