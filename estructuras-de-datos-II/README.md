# Estructuras de datos II

En este módulo estudiamos uno de los componentes más importantes de Javascript: los objetos. `Object` es el único dato compuesto del lenguaje y de él derivan directamente gran parte del resto de conceptos: listas, clases, errores, etc.

Lo primero que es importante entender es que la igualdad entre objetos funciona _por referencia_. Es decir, estos dos objetos **no son iguales**:

```javascript
const obj1 = { Homer: "Simpson" };
const obj2 = { Homer: "Simpson" };

console.log(obj1 === obj2); // false
```

- [ ] Exploramos las consecuencias de este modelo en los ejercicios y aprovechamos para analizar que opciones nativas tenemos para recorrer objetos. Vistos los métodos nativos, implementamos algunos métodos propios para aumentar nuestro abanico de métodos para recorrer objetos:

* [ ] `mapValues`, `mapKeys`,

##### Recursos

- [Objetos](https://eloquentjavascript.net/04_data.html#h_cqg63Sxe3o)
- [Objetos en profundidad](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
- [Comparando objetos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#comparing_objects)
- [Enumerar propiedades en objetos](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#enumerate_the_properties_of_an_object)

## Object.assign y destructuring

Estudiarmos este método para fusionar objetos en profundidad y aprovecharemos para repasar algunos de los retos que introduce la recursividad con objetos. Crearemos nuestras propias funciones de utilidad para clonar, fusionar y modificar objetos respetando las referencias.

- `traverse`, `clone`, `cloneDeep`, `mergeDeep`

Introducimos el concepto de la desestructuración en el módulo de listas. Veremos que esta herramienta, junto con `spread`, también nos sirve para manipular objetos.

##### Recursos

- [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
- [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## Contexto

Para entender completamente cómo funcionan los objetos y que posibilidades nos permiten es completamente necesario entender como funciona el _contexto_ y la palabra reservada _this_. En esta sección exploramos qué es y como podemos manipularlo utilizando funciones nativas como `call`, `apply` y `bind`.

##### Recursos

- [Contexto](https://eloquentjavascript.net/03_functions.html#h_D2Yui+mx6D)
- [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

## Object.defineProperty

`defineProperty` nos permite tener mucho más control sobre el comportamiento de nuestros objetos. Configurando sus propiedades podemos:

- controlar si las propiedades son visibles (enumerables)
- si las propiedades pueden ser modificadas
- si estas reglas pueden o no ser redefinidas

Introducimos también el concepto de los getters y los setters. Herramientas que podemos utilizar para modificar como se comporta la escritura y la lectura de objetos.

##### Recursos

- [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)
- [Getters y setters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters)

## Prototipos

Finalmente, repasamos cómo funciona el sistema de prototipos para entender de qué forma se implementa la orientación a objetos en Javascript.

##### Recursos

- [Orientación a Objetos en JS](https://eloquentjavascript.net/06_object.html)
- [Prototipos](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
