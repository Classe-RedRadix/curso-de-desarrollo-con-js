/**
 * Implementa la función memoize para funciones de cualquier número de parámetros.
 * La función debe transformar a mayusculas el string proporcionado.
 * Si estamos memoizando el paramtro, se debe emitir un log con el texto "memoizing".
 * Si estamos devolviendo el valor memoizado, se debe emitir un log con el texto "memoized".
 */

function memoize(fn) {
  const cache = {};

  return (...strings) => {
    const key = strings.join("-");
    const isCached = cache[key] !== undefined;

    if (!isCached) {
      console.log("memoizing...");
      cache[key] = fn(...strings);
    } else {
      console.log("memoized...");
    }

    console.log("Caché: ", key, cache[key]);

    return cache[key];
  };
}

function toUppercase(...strings) {
  return strings.map(word => word.toUpperCase());
}

const stringsToUpperCase = memoize(toUppercase);

console.log(stringsToUpperCase("Hello", "World")); // ["HELLO", "WORLD"] (Debe verse en consola el log: "memoizing")
console.log(stringsToUpperCase("Hello", "Jhon")); // ["HELLO", "JHON"] (Debe verse en consola el log: "memoizing")
console.log(stringsToUpperCase("Hello", "World")); // ["HELLO", "WORLD"] (Debe verse en consola el log: "memoized")
