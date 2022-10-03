function randomNumber(modifier) {
  let base; // <- Debemos declarar la variable let fuera del scope de bloque de los ifs

  if (Math.random() > 0.5) {
    base = 1;
  } else {
    base = -1;
  }

  return base * modifier * Math.random();
}

randomNumber(); // Error!
