/**
 * Construye una estructura de datos que se pueda desestructurar con esta expresión.
 */

const estructura = [{lista: [undefined, {x: {y: 2}}]}];

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
