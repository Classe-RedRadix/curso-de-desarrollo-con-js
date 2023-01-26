/**
 * Implementa la función mapValues que transforma todos
 * los valores de un objeto.
 */

function mapValues(object, transformer) {
    return Object.values(object).reduce((acc, value, key) => {
        const transformedValue = transformer(value);
        console.log(key);
        acc[key] = transformedValue;
        return acc;
    }, {});
}

console.log(mapValues({ a: 1, b: 2, c: 3 }, (x) => x * 2)); // { a: 2, b: 4, c: 6 }
