# Prework

Bienvenido al curso de JavaScript Profesional de RedRadix. El objetivo de este curso es introducir al programador junior de JS en aspectos más avanzados del lenguaje y proporcionarle nuevas herramientas que le permitirán acelerar su desarrollo y comprensión del código. Por supuesto, el alumno implementará estas herramientas.

Este curso es 80% práctico y se pone especial enfasis en que los alumnos resuelvan los ejercicios. Primero lo harán por su cuenta y después implementarán las soluciones junto al profesor, momento en el que podrán ver las mejores prácticas y resolver las dudas que hayan podido surgir.

Para seguir el curso con fluidez es necesario tener una base sólida de los principios fundamentales del lenguaje JavaScript, así como práctica en su empleo. A continuación exponemos una lista de los conceptos que el estudiante debe dominar antes de empezar las clases. Incluímos también recursos que el usuario puede consultar para profundizar en esos temas.

#### Nota sobre los recursos

Incluímos los enlaces a las versiones inglesas de los materiales complementarios ya que estas ofrecen una garantía más consistente en cuanto a la calidad y exhaustividad del contenido. No obstante, la mayoría de enlaces disponen de traducciones al español.

- Las páginas de MDN están disponibles en español (opción de lenguaje en la esquina superior derecha).

- Los enlaces a Eloquent Javascript también pueden consultarse en español en esta traducción: https://eloquentjs-es.thedojo.mx

# Tabla de contenido

1. [Requisitos generales](#requisitos-generales)
2. [Conceptos básicos](#conceptos-basicos)
3. [Funciones](#funciones)
4. [Manipulación de strings](#manipulacion-strings)
5. [Intervalos](#intervalos)
6. [Gestión de errores](#gestion-errores)
7. [Calentamiento](#calentamiento)

## Requisitos generales <a name="requisitos-generales">

- Control de un IDE (cualquiera vale, recomendamos [Visual Studio Code](https://code.visualstudio.com/))
- Entorno donde ejecutar JavaScript (preferiblemente [Node](https://nodejs.org/en/))
- Experiencia desarrollando en JS o algún otro lenguaje de programación

## Conceptos básicos <a name="conceptos-basicos">

### Requisitos

Es **necesario** tener una comprensión firme de los tipos y conceptos básicos de JS.

```
- variable, valor, comentario
- Boolean, String, Number
- undefined, null
```

Es **necesario** dominar con soltura la comparación y el control de flujo.

```
- true, false
- > , <, >=, <=, ==, ===
- if, else, if else,
- for, while
- ||, &&
```

Es **necesario** tener soltura creando, recorriendo, leyendo y asignando valores en arrays y objetos.

```
- [], {}
- Array, Object y cómo recorrerlos
- Array.slice, Array.indexOf, Array.isArray
- Object.keys, Object.values
- for let of
```

##### Recursos

- [Valores y tipos](https://eloquentjavascript.net/01_values.html)
- [Conceptos básicos y control de flujo](https://eloquentjavascript.net/02_program_structure.html)
- [Más control de flujo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Array](https://www.w3schools.com/js/js_arrays.asp)
- [Object](https://www.w3schools.com/js/js_objects.asp)

##### Ejercicios prework

```javascript
// Crea una función que devuelva los números pares

function getEven(nums) {
  // TODO
}

getEven([1, 2, 3, 4, 5]); // [2, 4]
```

```javascript
// Crea una función que devuelva la suma total

function sum(nums) {
  // TODO
}

sum([1, 2, 3, 4, 5]); // 15
```

```javascript
// Crea una función que devuelva el número máximo
// No utilizes Math.Max ni similares

function max(nums) {
  // TODO
}

max([2, 4, 6, 8]); // 8
```

```javascript
// Recorre y suma todos los números de este array
let array = [
  [2, 2],
  [3, 4],
  [1, 1, 1],
];
```

#### Funciones <a name="funciones">

##### Requisitos

- Declaración y llamada de funciones
- Parámetros, parámetros opcionales, parámetros por defecto
- Nociones básicas de cómo funciona el scope
- Cómodidad leyendo arrow functions
- `return`

###### Recursos

- [Funciones (básico)](https://www.w3schools.com/js/js_functions.asp)
- [Funciones](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Scope](https://www.w3schools.com/js/js_scope.asp)
- [Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#### Manipulación de strings <a name="manipulacion-strings">

##### Requisitos

- Concatenación de strings
- Concatenación de strings y números
- Manipulación de strings mediante `slice`, `split`, `join`
- Parseo de números (`parseInt`, `parseFloat`)

###### Recursos

- [Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Métodos strings](https://www.w3schools.com/js/js_string_methods.asp)

###### Ejercicios prework

```javascript
// Crea una función que separe las palabras de una frase
function getWords() {
  // TODO
}

getWords("lorem ipsum dolor"); // ["lorem", "ipsum", "dolor"]
```

```javascript
// Crea una función que elimine todos los espacios de una frase
function removeSpaces() {
  // TODO
}

removeSpaces("lorem ipsum dolor"); // "loremipsumdolor"
```

```javascript
// Crea una función que extraiga los números de una string con el formato provisto
function extractNumbers() {
  // TODO
}

extractNumbers("3 20 6 1"); // [3, 20, 6, 1]
```

#### Intervalos <a name="intervalos">

##### Requisitos

- `setTimeout`, `setInterval`

###### Recursos

- [setTimeout](https://www.w3schools.com/jsref/met_win_setTimeout.asp)
- [setInterval](https://www.w3schools.com/jsref/met_win_setinterval.asp)

###### Ejercicios prework

```javascript
// Crea una variable contado que empiece valiendo 0
// Incrementa el contador cada segundo e imprímelo
```

#### Gestión de errores <a name="gestion-errores">

##### Requisitos

- Experiencia resolviendo errores en el código (debugging)
- Comprender que un error interrumpe el flujo de ejecución del programa
- Entender las trazas de la consola
- `try/catch`

###### Recursos

- [try/catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

#### Calentamiento <a name="calentamiento">

Durante el curso resolveremos algunos ejercicios de dificultad elevada. No todos los ejercicios son complicados, pero algunos que pueden llegar a resultar complicados para desarrolladores experimentados. Recomendamos calentar antes de empezar el curso con los siguientes ejercicios:

##### Pyramid

```javascript
// Escribe una función que reciba un número positivo N
// La función debe imprimir una pirámide de simbolos #
// Con N niveles

// Ejemplos

pyramid(1);
// "#"

pyramid(2);
// " # "
// "###"

pyramid(3);
// "  #  "
// " ### "
// "#####"

function pyramid(N) {
  // TODO
}
```

##### Chunk

```javascript
// Escribe una función que dados un array y una longitud `size`
// divida la lista en múltiples subarrays de longitud `size`

// Ejemplos
// chunk([1, 2, 3, 4], 2); === [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) === [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) === [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) === [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) === [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // TODO
}
```
