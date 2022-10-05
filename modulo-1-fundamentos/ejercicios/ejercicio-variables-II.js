function randomNumber(modifier) {
  let base;
  if (Math.random() > 0.5) {
    base = 1;
  } else {
    base = -1;
  }

  return base * modifier * Math.random();
}

console.log(randomNumber(2));
