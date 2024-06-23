// Escribe una función que reciba un número positivo N
// La función debe imprimir una pirámide de simbolos #
// Con N niveles

function pyramid (rows) {
  let columns = (rows * 2) - 1;
  for (let currentRow = 1; currentRow <= rows; currentRow++) {
    let pyramidRow = '';
    let hastagsPerRow = (currentRow * 2) - 1;
    let spacesPerRowOnEachSide = (columns - hastagsPerRow) / 2;
    pyramidRow = `${' '.repeat(spacesPerRowOnEachSide)}${'#'.repeat(hastagsPerRow)}${' '.repeat(spacesPerRowOnEachSide)}`
    print.log(pyramidRow);
  }
}

pyramid(1);
pyramid(2);
pyramid(3);


