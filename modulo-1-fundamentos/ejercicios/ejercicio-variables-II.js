function randomNumber(modifier) {
  if (Math.random() > 0.5) {
    let base = 1;
  } else {
    let base = -1;
  }

  return base * modifier * Math.random();
}

randomNumber(); // Error!
