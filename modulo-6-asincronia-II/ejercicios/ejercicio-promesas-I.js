// Escribe una función throwOneCoin que devuelva una promesa que represente el lanzamiento de una moneda.
// La moneda tarda 2 segundos en caer.
// 50% de las veces, la promesa se resuelve y devuelve “cruz!”.
// 50% de las veces, la promesa se rechaza y devuelve “cara…”.

const throwDice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        resolve();
      } else {
        reject();
      }
    }, 2000);
  });
};

throwDice()
  .then(() => console.log('cruz'))
  .catch(() => console.log('cara'));
