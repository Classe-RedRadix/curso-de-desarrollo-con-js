const a = { a: 1 };
const b = { b: 2 };
const c = { c: 3 };

Object.assign(a, b, c);

console.log(a); // { a: 1, b: 2, c: 3 }

// ¿Como obtenemos el mismo resultado, sin modificar a?

/**
 * Pistas:
 * 1. Si modificamos de izquierda a derecha,
 *    es posible que necesitemos un elemento extra a la izquierda.
 */
