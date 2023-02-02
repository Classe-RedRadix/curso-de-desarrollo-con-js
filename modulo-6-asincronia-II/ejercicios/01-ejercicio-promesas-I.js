/**
 * Escribe una función throwOneCoin que devuelva una promesa que represente el lanzamiento de una moneda.
 * La moneda tarda 2 segundos en caer.
 * - 50% de las veces, la promesa se resuelve y devuelve “cruz!”.
 * - 50% de las veces, la promesa se rechaza y devuelve “cara…”.
 */


const throwOneCoin = () => {
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuperiorTo50 = Math.random() > 0.5;

      if (isSuperiorTo50) {
        resolve("Cruz!");
      } else {
        reject("cara...");
      }
    }, 2000);
  });
};

throwOneCoin().then(console.log).catch(console.log); // "cruz!" o "cara..."

