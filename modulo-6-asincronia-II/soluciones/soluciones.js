// Ejercicio promesas
function throwOneCoin() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) resolve("cruz!");
      else reject("cara...");
    }, 2000);
  });
}

throwOneCoin().then(console.log).catch(console.error);

// Ejercicio promesas II
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

wait(2000).then(() => console.log("Han pasado dos segundos"));

// Ejercicio promesas III
function throwDice() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.ceil(Math.random() * 6)), 100);
  });
}

throwDice().then(console.log);

// Ejercicio promesas IV
function getPlayerScore() {
  return new Promise((resolve) => {
    throwDice().then((result) => {
      throwDice().then((result2) => {
        resolve([result, result2]);
      });
    });
  });
}

getPlayerScore().then(console.log);

// Ejercicio promesas V
function startGame() {
  return new Promise((resolve) => {
    getPlayerScore().then((result) => {
      getPlayerScore().then((result2) => {
        getPlayerScore().then((result3) => {
          resolve([result, result2, result3]);
        });
      });
    });
  });
}

startGame().then(console.log);

// Ejercicio promesas VI
function getPlayerScore2() {
  return Promise.all([throwDice(), throwDice()]);
}

function startGame2() {
  return Promise.all([getPlayerScore2(), getPlayerScore2(), getPlayerScore2()]);
}

startGame2().then(console.log);

// Ejercicio async/await II
function asyncMap(list, func) {
  // func devuelve una promesa siempre
  return Promise.all(list.map((elem) => func(elem)));
}

(async () => {
  const results = await asyncMap(["Homer", "Fry", "Peter"], throwDice);
  console.log(results);
})();

// Ejercicio async/await III
async function asyncSequentialMap(list, func) {
  // func devuelve una promesa siempre
  const results = [];
  for (let item of list) {
    results.push(await func(list));
  }
  return results;
}

(async () => {
  const results = await asyncMap(["Homer", "Fry", "Peter"], throwDice);
  console.log(results);
})();

// Ejercicio async/await IV
async function promiseAllSafe(promises) {
  const results = [];
  for (let promise of promises) {
    try {
      results.push(await promise);
    } catch (err) {
      console.error("Error:", err);
      results.push(null);
    }
  }
  return results;
}

(async () => {
  console.log(
    await promiseAllSafe([
      Promise.resolve(1),
      Promise.reject("stack overflow"),
      Promise.resolve(3),
    ])
  );
})();

// Ejercicio async/await V
const retry = (n, callback) => {
  return new Promise((resolve, reject) => {
    if (n === 0) return reject(`Retries exceeded`);
    console.log("Trying...");
    callback()
      .then(resolve)
      .catch(async () => await retry(n - 1, callback).catch(reject));
  });
};

(async () => {
  const result = await retry(3, () => Promise.resolve("worked"));
  console.log(result); // "worked"
  // Realizará tres intentos y levantará excepción
  retry(3, () => Promise.reject("won't work"));
})();

// Ejercicio async/await VI
const fs = require("fs").promises;
const path = require("path");

async function getSize(path) {
  const stats = await fs.stat(path);
  if (!stats.isDirectory()) return stats.size;
  if (stats.isDirectory()) return calculateDirSize(path);
}

async function calculateDirSize(path, cb) {
  const files = await fs.readdir(path);
  const paths = files.map((f) => `${path}/${f}`);
  const sizes = await Promise.all(paths.map((path) => getSize(path)));
  return sizes.reduce((acc, size) => acc + size, 0);
}

calculateDirSize(".").then((size) => {
  console.log("Total:", (size / 1024).toFixed(2), "Kb");
});
