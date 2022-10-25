// Crea una función wait que reciba un número de milisegundos y devuelva una promesa.
// La promesa se debe resolver cuando pase el tiempo indicado.

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const main = async () => {
  await wait(2000);
  console.log('Han pasado 2 segundos');
};

main();
