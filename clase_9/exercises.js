/*const counter = () => {
  let count = 0;
  const myIntervalId = setInterval(() => {
    count = count + 1;
    console.log(count)
    if(count === 5) {
      clearInterval(myIntervalId)
    }
  }, 1000)
}

counter();*/

/*---------------------------------------*/

/*const ping = (fn) => {
  setTimeout(() => {
    console.log('ping');
    ping();
  }, 500);
};

ping();*/

/*---------------------------------------*/

/*const throwDice = (fn) => {
  setTimeout(() => {
    fn(Math.floor(Math.random()*6)+1);
  }, 500)
}*/

/*throwDice((result) => console.log(result));*/ // throwDice(console.log)

/*---------------------------------------*/

/*const getPlayerScore = (fn) => {
  const score = [];

  throwDice((value) => {

    score.push(value);

    throwDice((value) => {

      score.push(value);
      fn(score);

    });

  })
  };*/

/*getPlayerScore(console.log)*/

/*---------------------------------------*/

/*const startGame = (cb) => throwDice((d1j1) => throwDice(
  (d2j1) => throwDice(
    (d1j2) => throwDice(
      (d2j2) => throwDice(
        (d1j3) => throwDice(
          (d2j3) => cb([[d1j1, d2j1], [d1j2, d2j2], [d1j3, d2j3]])
        )
      )
    )
  )));*/

/*const startGame = (cb) => {
  getPlayerScore((j1) =>
    getPlayerScore((j2) =>
      getPlayerScore((j3) => cb([j1, j2, j3])
      )
    )
)}

startGame(console.log);*/

/*---------------------------------------*/

const fs = require('fs')
/*const path = require('path')

const calculateDirSize = (dir) => {

  let totalSize;

  fs.readdir(dir, (err, files) => {

    if(err){
      console.log(err)
    } else {
      for(const item of files) {

        if(fs.stat(item, (error, stats) => stats.isFile())){
          console.log(stats)
        }
        }
      }
    })
    //return totalSize
  };


console.log(calculateDirSize('.',))*/

/*---------------------------------------*/

const asyncMap = (list, fn, cb) => {
  list.map((item, i) => {
    if(!err) {
      fn(item, cb(i))
    } else cb(err)
  })
}


const funcPrueba = (dir, cb) => {
  fs.readdir(dir, (err) => {
    !err
      ? cb(null, `> Soy el num ${shared++} y mi directorio es ${dir}`)
      : cb(err);
  });
};

//asyncMap(list, fn, (err, results) => {console.log(results)})
asyncMap(['.', '../', ','], funcPrueba, (err, results) => {console.log(results)})




















