const obj = { uno: 1, lista: [2, 3], cuatro: 4, x: { cinco: 5 } };

// Desestructura el siguiente objeto en las variables uno, dos, tres, cuatro y cinco.

const {
  uno,
  lista: [dos, tres],
  cuatro,
  x: { cinco },
} = obj;

console.log(uno, dos, tres, cuatro, cinco);
