/**
 * Implementa la función memoize para funciones de cualquier número de parámetros.
 * La función debe transformar a mayusculas el string proporcionado.
 * Si estamos memoizando el paramtro, se debe emitir un log con el texto "memoizing".
 * Si estamos devolviendo el valor memoizado, se debe emitir un log con el texto "memoized".
 */

function memoize(/* ? */) {
  // ?
}

console.log(memoize("Hello", "World")); // ["HELLO", "WORLD"] (Debe verse en consola el log: "memoizing")
console.log(memoize("Hello", "Jhon")); // ["HELLO", "JHON"] (Debe verse en consola el log: "memoizing")
console.log(memoize("Hello", "World")); // ["HELLO", "WORLD"] (Debe verse en consola el log: "memoized")
