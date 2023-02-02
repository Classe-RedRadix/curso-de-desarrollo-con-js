/**
 * Escribe una función throwOneCoin que devuelva una promesa que represente el lanzamiento de una moneda.
 * La moneda tarda 2 segundos en caer.
 * - 50% de las veces, la promesa se resuelve y devuelve “cruz!”.
 * - 50% de las veces, la promesa se rechaza y devuelve “cara…”.
 */

/*
const throwOneCoin = () => {
  // ?
};

throwOneCoin().then(console.log); // "cruz!" o "cara..."

*/
/* Apuntes 

// Pending
const promiseResolved = Promise.resolve(7); // <- Estado fulfilled de la promesa
const promiseRejected = Promise.rejected(new Error("Mi error")); // <- Estado rejected de la promesa
*/
const promise1 = new Promise((resolve, reject) => {
    console.log("se ejecuta la promesa");
    setTimeout(() => resolve(), 5000);
  });
  
  promise1
    .then(() => console.log("Esto aparece a los 5 segundis"))
    .catch(error => {
      console.error(error);
    });