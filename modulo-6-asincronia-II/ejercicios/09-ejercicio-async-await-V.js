/**
 * Implementa la función retry que repite una función asíncrona hasta que
 * esuelve o se acaba el límite de intentos.
 */

const wait = require("./02-ejercicio-promesas-II");

async function retry() {
  // ?
}

async function maybeFailingLogger() {
  await wait(1000);

  const willFail = Math.random() > 0.5;

  if (willFail) throw new Error("Failed.");

  console.log("SPAM!");
}

retry(maybeFailingLogger, 3); // SPAM! SPAM! SPAM!
