/**
 * Implementa la función memoize para funciones de un sólo parámetro.
 * La función debe transformar a mayusculas el string proporcionado.
 * Si estamos memoizando el paramtro, se debe emitir un log con el texto "memoizing".
 * Si estamos devolviendo el valor memoizado, se debe emitir un log con el texto "memoized".
 */

function memoize(string) {
  // ?
}

console.log(memoize("Hello")); // HELLO (Debe verse en consola el log: "memoizing")
console.log(memoize("World")); // WORLD (Debe verse en consola el log: "memoizing")
console.log(memoize("Hello")); // Hello (Debe verse en consola el log: "memoized")
