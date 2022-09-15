# Módulo 3 - Funciones de primer orden

## Contenido

- [Funciones de primer orden](#funciones-de-primer-orden)
- [Clausuras](#clausuras)
- [Funciones que devuelven funciones](#funciones-que-devuelven-funciones)

## Funciones de primer orden

Llamamos funciones de primer orden a aquellas que:

- a) Reciben una función como parámetro
- b) Devuelven una función como resultado

En este módulo exploramos las repercusiones de utilizar este tipo de funciones y exploramos algunas de las posibilidades que nos habilitan.

##### Recursos

- [funciones de primer orden](https://eloquentjavascript.net/05_higher_order.html) -> lectura muy recomendada

Empezando por las funciones que reciben otras funciones por parámetro, implementaremos múltiples métodos de utilidad que se apoyan en las funciones de primer orden.

- `repeat`
- `retry`
- `map`
- `filter`
- `reduce`

## Clausuras

Un concepto muy importante a la hora de entender cómo se comportan las funciones en Javascript son las clausuras. En esencia, la clausura es el scope _en el momento de creación de una función_. Esta define todas las variables a las que la función va a tener acceso desde cualquier lugar. La clausura no se altera aunque la función se importe desde otro módulo o se pase por parámetro.

Las clausuras se explican en detalle durante la presentación del módulo e introducimos algunos conceptos como _variable libre_ y las diferentes versiones del _operador de incremento_ (`++`).

##### Recursos

- [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [clausuras](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [más clausuras](https://eloquentjavascript.net/03_functions.html#h_hOd+yVxaku)
- [operador de incremento](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
- [variable libre](https://stackoverflow.com/questions/12934929/what-are-free-variables#:~:text=A%20free%20variable%20is%20simply,but%20is%20used%20inside%20it.&text=By%20the%20way%2C%20all%20global,the%20free%20variables%20are%20global.)

## Funciones que devuelven funciones

Expuestas las clausuras, el módulo explora las posibilidades que se desbloquean al poder implementar funciones que reciben una función y **devuelven** otra función. En definitiva, este mecanismo nos permite modificar el comportamiento de las funciones de entrada de varias formas:

- Cambiar la forma o el número de los parámetros que espera esa función
- Cambiar la frecuencia con la que se llama esa función.
- Controlar que la función solo se ejecute si se cumplen determinadas condiciones.

Implementaremos algunos ejemplos en este módulo como `memoize` y `partial`, pero veremos más ejemplos en el módulo de asincronía.

De nuevo, Lodash ofrece muchas funciones utiles de primer orden:

- [memoize](https://lodash.com/docs/4.17.15#memoize)
- [partial](https://lodash.com/docs/4.17.15#partial)
- [partialRight](https://lodash.com/docs/4.17.15#partialRight)
- [once](https://lodash.com/docs/4.17.15#once)
- [wrap](https://lodash.com/docs/4.17.15#wrap)
