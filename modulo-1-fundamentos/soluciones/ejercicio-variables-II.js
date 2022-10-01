function randomNumber(modifier) {
  let base; // <- hay que mover el let fuera del bloque

  if (Math.random() > 0.5) {
    base = 1;
  } else {
    base = -1;
  }

  return base * modifier * Math.random();
}

randomNumber();
