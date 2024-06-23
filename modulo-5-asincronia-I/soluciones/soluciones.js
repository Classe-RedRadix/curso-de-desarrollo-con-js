// Ejercicio intervalos
let counter = 0;

setInterval(() => {
  print.log(++counter);
}, 1000);

// Ejercicio intervalos II
function ping() {
  setTimeout(() => {
    print.log("ping");
    ping();
  }, 500);
}

ping();

// Ejercicio template strings I
function tag(tagname) {
  return `<${tagname}></${tagname}>`;
}

print.log(tag("div"));

// Ejercicio template strings II
function printTime() {
  const d = new Date();
  print.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
}

setInterval(printTime, 1000);

// Ejercicio asincronía I
function throwDice(callback) {
  const result = Math.ceil(Math.random() * 6);
  setTimeout(() => callback(result), 1000);
}

throwDice(print.log);

// Ejercicio asincronía II
function getPlayerScore(callback) {
  throwDice((dice1) => {
    throwDice((dice2) => {
      callback([dice1, dice2]);
    });
  });
}

getPlayerScore(print.log);

// Ejercicio asincronía III
function startGame(callback) {
  getPlayerScore((player1) => {
    getPlayerScore((player2) => {
      getPlayerScore((player3) => {
        callback([player1, player2, player3]);
      });
    });
  });
}

startGame(print.log);

// Ejercicio asincronía IV
function startGame2(players, callback) {
  let results = [];
  const maybeReturn = (result) => {
    results.push(result);
    if (results.length === players) callback(results);
  };
  for (let i = 0; i < players; i++) {
    getPlayerScore(maybeReturn);
  }
}

startGame2(5, print.log);

// Ejercicio filesystem
const fs = require("fs");
const path = require("path");

function calculateDirSize(dirPath, cb) {
  fs.readdir(dirPath, (err, fileNames) => {
    if (err) cb(err);
    else {
      let total = 0;
      for (let i = 0; i < fileNames.length; i++) {
        const filePath = path.join(dirPath, fileNames[i]);
        fs.stat(filePath, (err, stats) => {
          if (err) cb(err);
          else {
            if (!stats.isDirectory()) total = total + stats.size;
            if (i === fileNames.length - 1) cb(null, total);
          }
        });
      }
    }
  });
}

calculateDirSize(".", (err, size) => {
  print.log("Total:", (size / 1024).toFixed(2), "Kb");
});

// Ejercicio asyncMap
function asyncMap(list, fn, cb) {
  const next = (remaining, results) => {
    if (remaining.length === 0) return cb(null, results);
    const [head, ...tail] = remaining;
    fn(head, (err, result) => {
      if (err) cb(err);
      else next(tail, [result, ...results]);
    });
  };
  next(list, []);
}

// Ejercicio filesystem II
const fs = require("fs");
const path = require("path");

// Es recomendable sacar fuera la función que recibe asyncMap para
// facilitar la legibilidad del código
function getFileSize(path, cb) {
  return fs.stat(path, (err, stats) => {
    if (err) cb(err);
    else if (!stats.isDirectory()) cb(null, stats.size);
    else if (stats.isDirectory()) cb(null, 0);
  });
}

function calculateDirSize2(path, cb) {
  fs.readdir(path, (err, files) => {
    const fullPathFiles = files.map((f) => `${path}/${f}`);
    asyncMap(fullPathFiles, getFileSize, (err, sizes) => {
      if (err) return cb(err);
      const totalSize = sizes.reduce((acc, el) => acc + el, 0);
      cb(null, totalSize);
    });
  });
}

calculateDirSize2(".", (err, size) => {
  print.log("Total:", (size / 1024).toFixed(2), "Kb");
});

// Ejercicio filesystem III
const fs = require("fs");
const path = require("path");

function getSize(path, cb) {
  return fs.stat(path, (err, stats) => {
    if (err) cb(err);
    else if (!stats.isDirectory()) cb(null, stats.size);
    else if (stats.isDirectory()) calculateDirSize3(path, cb); // aquí está la clave
  });
}

function calculateDirSize3(path, cb) {
  fs.readdir(path, (err, files) => {
    const fullPathFiles = files.map((f) => `${path}/${f}`);
    asyncMap(fullPathFiles, getSize, (err, sizes) => {
      if (err) return cb(err);
      const totalSize = sizes.reduce((acc, el) => acc + el, 0);
      cb(null, totalSize);
    });
  });
}

calculateDirSize3(".", (err, size) => {
  print.log("Total:", (size / 1024).toFixed(2), "Kb");
});

// Ejercicio throttle
function throttle(func, ms) {
  let blocked = false;
  return (...args) => {
    if (blocked) return;
    blocked = true;
    func(...args);
    setTimeout(() => {
      blocked = false;
    }, ms);
  };
}

const throttledLog = throttle(print.log, 500);

throttledLog("SPAM!");
setTimeout(() => throttledLog("SPAM!"), 250); // bloqueado
setTimeout(() => throttledLog("SPAM!"), 550);

// Ejercicio debounce
function debounce(func, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, ms);
  };
}

const debouncedLog = debounce(print.log, 500);

debouncedLog("SPAM!"); // bloqueado
setTimeout(() => debouncedLog("SPAM!"), 250); // bloqueado
setTimeout(() => debouncedLog("SPAM!"), 550);

// Ejercicio observables
// solución en ./observables.js
const eventManager = require("./observables-I.js");
eventManager.on("detonate", () => print.log("explosion"));
eventManager.on("detonate", () => print.log("smoke"));
eventManager.emit("detonate");

// Ejercicio observables II
// solución en ./observables.js
const eventManager2 = require("./observables-II.js");
eventManager2.once("detonate", () => print.log("explosion"));
eventManager2.once("detonate", () => print.log("smoke"));
eventManager2.emit("detonate");
eventManager2.emit("detonate"); // no imprime nada

// Ejercicio observables III

class Observable {
  constructor() {}
  events = {};
  emit(key) {
    if (this.events[key]) this.events[key].forEach((callback) => callback());
  }
  on(key, callback) {
    this.events[key] = this.events[key] || [];
    this.events[key].push(callback);
  }
  off(key, callback) {
    this.events[key] = this.events[key].filter((f) => f !== callback);
  }
}

class Test extends Observable {
  constructor() {
    super();
  }
}

const test = new Test();
test.on("detonate", () => print.log("explosion"));
test.on("detonate", () => print.log("smoke"));
test.emit("detonate");
