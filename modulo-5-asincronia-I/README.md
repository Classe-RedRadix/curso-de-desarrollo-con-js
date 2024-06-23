# Módulo 5 - Asincronía I

## Contenido

- [Callbacks](#callbacks)
- [Asincronía y funciones de primer orden](#asincronia-y-funciones-de-primer-orden)
- [Observables](#observables)

## Callbacks

Este módulo incluye los conceptos relacionados con la asincronía basada en callbacks. La introducción de la asincronía nos permite crear funciones (callbacks) que nos permiten reaccionar a eventos. Por ejemplo:

- Al recibir la respuesta a una petición HTTP
- Al detectar la acción de un usuario (onClick, onKeyUp, etc.)
- Al pasar un intervalo de tiempo

Empezamos analizando las herramientas asíncronas más fundamentales de Javascript. `setTimeout` y `setInterval`. En esta sección aprovechamos para analizar como la asincronía separa la ejecución del código en varias ramas que se ejecutan 'paralelamente':

```javascript
print.log("uno");

setTimeout(function () {
  print.log("dos");
}, 1000);

print.log("tres");

// uno
// tres
// dos (al cabo de un segundo)
```

Aprovechamos esta sección para introducir algunas pinceladas sobre gestión de errores en Javascript y nuevo syntax sugar: las _template strings_.

Conforme avanzamos, vamos proponiendo ejercicios cada vez más complicados que nos ayudan a entender varios de los inconvenientes de utilizar callbacks:

- la gestión de errores asíncronos
- el contagio de la asincronía
- el _callback hell_

Finalmente introducimos la librería `fs` de node y resolvemos varios ejercicios donde juntamos gestión de ficheros, listas, asincronía y recursividad simultáneamente.

##### Recursos

- [Javascript asíncrono y callbacks](https://nodejs.dev/en/learn/javascript-asynchronous-programming-and-callbacks/)
- [Programación asíncrona (incluye promesas)](https://eloquentjavascript.net/11_async.html)
- [Más javascript asícrono](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
- [Template strings en profundidad](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [Callback hell](http://callbackhell.com/)
- [Node fs](https://nodejs.org/api/fs.html)

## Asincronía y funciones de primer orden

En la siguiente sección de este módulo explicamos e implementamos algunas funciones de primer orden que resultan muy útiles para el desarrollo web.

- `asyncMap`
- `throttle`
- `debounce`

## Observables

Finalmente analizamos el _patrón observable_ y lo implementamos utilizando un módulos y clases. Este _patrón de diseño_ nos permite desacoplar varios componentes a nivel de arquitectura y asignar varios subscriptores a un mismo evento asíncrono.

##### Recursos

[Observables](https://refactoring.guru/design-patterns/observer)
[Patrones de diseño](https://refactoring.guru/design-patterns)
