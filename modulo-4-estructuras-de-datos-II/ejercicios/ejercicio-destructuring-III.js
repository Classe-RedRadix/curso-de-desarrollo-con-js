const obj = { uno: 1, lista: [2, 3], cuatro: 4, x: { cinco: 5 } };

const {
    uno,
    lista:[dos,tres],
    cuatro,
    x:{cinco}
} = obj

// Desestructura el siguiente objeto en las variables uno, dos, tres, cuatro y cinco.
console.log(uno, dos, tres, cuatro, cinco)
/**
 * Pistas:
 * 1. Usa destructuración anidada.
 */
