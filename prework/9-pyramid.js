// Function that generates a pyramid with # symbols

function pyramid(N) {
  let brick = "";

  for (let i = 0; i < N; i++) {
    brick += "#" + "\n";
  }

  return brick;
}

console.log(pyramid(3));
