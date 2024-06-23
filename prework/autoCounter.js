// Crea una variable contado que empiece valiendo 0
// Incrementa el contador cada segundo e imprímelo

let i = 0;

const increaseOne = () => {
  i = i+1;
  print.log(i);
};

let autoCounter = setInterval(increaseOne, 1000, i);