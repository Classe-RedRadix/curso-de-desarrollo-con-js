/** Resuelve los ejercicios anteriores, creando versiones modificadas de
 * getPlayerScore y startGame que usen Promise.all
 */

const throwDice = require("./03-ejercicio-promesas-III");

function getPlayerScore() {
  return new Promise((resolve, reject) => {
    const dice1 = throwDice();
    const dice2 = throwDice();
    Promise.all([dice1, dice2]).then(scores => resolve(scores));
  });
}

function startGame() {
  return new Promise((resolve) => {
    const score1 = getPlayerScore();
    const score2 = getPlayerScore();
    const score3 = getPlayerScore();

    Promise.all([score1, score2, score3]).then(scores => resolve(scores));
  });
}

console.time("Execution");
startGame().then((result) => {
  console.log(result); // [[2, 2], [4, 6], [5, 1]]
  console.timeEnd("Execution");
});

