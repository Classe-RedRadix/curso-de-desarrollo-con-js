/**
 * Implementa los siguientes ejercicios anteriores con async/await:
 * - throwDice
 * - getPlayerScore
 * - startGame
 * Usa la función wait cuando necesites esperar N milisegundos.
 */

const wait = require("./02-ejercicio-promesas-II");

async function throwDice() {
  const value = Math.max(1, Math.ceil(Math.random() * 6));
  await wait(1000);
  return value;
}


async function getPlayerScore() {
  return Promise.all([throwDice(), throwDice()]);
}

async function startGame() {
  const player1 = await getPlayerScore();
  const promisePlayer2 = getPlayerScore();

  // podría poner await aquí o no ponerlo (y quitar el async, entonces)
  // esto siempre devuelve una promesa
  return await Promise.all([
    player1,
    await promisePlayer2,
    await getPlayerScore()
  ]);
}

console.time("startGame");
startGame().then((result) => {
  console.timeEnd("startGame");
  console.log(result); // [[2, 2], [4, 6], [5, 1]]
});
