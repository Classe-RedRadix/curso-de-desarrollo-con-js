// Crea aqui la estructura que cumpla los requisitos para que
// la destructuración anidada funcione.

const estructura = [{ lista:[ ,{ x: { y: 2 } } ] }]

const [
  {
    lista: [
      ,
      {
        x: { y: dos },
      },
    ],
  },
] = estructura;

console.log(dos)