/**
 * Implementa la función memoize para funciones de un sólo parámetro.
 * La función debe transformar a mayusculas el string proporcionado.
 * Si estamos memoizando el paramtro, se debe emitir un log con el texto "memoizing".
 * Si estamos devolviendo el valor memoizado, se debe emitir un log con el texto "memoized".
 */

function memoize(fn) {
  const cache = {};

  return (string) => {
    const isCached = cache[string] !== undefined;

    if (!isCached) {
      console.log("memoizing...");
      cache[string] = fn(string);
    } else {
      console.log("memoized...");
    }

    return cache[string];
  };
}

function toUppercase(string) {
  return string.toUpperCase();
}

const toUppercaseMemoized = memoize(toUppercase);

console.log(toUppercaseMemoized("Hello")); // HELLO (Debe verse en consola el log: "memoizing")
console.log(toUppercaseMemoized("World")); // WORLD (Debe verse en consola el log: "memoizing")
console.log(toUppercaseMemoized("Hello")); // HELLO (Debe verse en consola el log: "memoized")