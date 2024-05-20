// Escribe una función que reciba un número positivo N
// La función debe imprimir una pirámide de simbolos #
// Con N niveles


function pyramid(N) {
  const SYMBOL = '#';
  const SPACE = ' ';
  const width = N * 2 - 1;
  const spaces = [...Array(N).keys()].reverse();

  spaces
    .forEach(lineSpaces => {
      const SYMBOL_WIDTH = width - lineSpaces * 2;
      const spaceString = SPACE.repeat(lineSpaces);
      const symbolString = SYMBOL.repeat(SYMBOL_WIDTH);
      const line = `${spaceString}${symbolString}${spaceString}`
      console.log(line)
    })
}


// Ejemplos
pyramid(1);
// "#"

pyramid(2);
// " # "
// "###"

pyramid(3);
// "  #  "
// " ### "
// "#####"


pyramid(15);