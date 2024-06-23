/*const throwOneCoin = new Promise((resolve, reject) => {
  setTimeout(() => {
    const number = Math.random();

    number < 0.5 ?
      resolve('cruz')
      : reject('cara')

  }, 2000)
})

throwOneCoin
  .then(console.log)
  .catch(console.log)*/

/*const wait = (n) => new Promise((resolve) => {
  setTimeout(() => resolve(n), n)
});*/

/*const throwDice = () => new Promise ( (resolve) => {
  resolve(wait(500)
    .then(() => Math.floor(Math.random()*6)+1))
});*/

/*throwDice().then(console.log);*/


/*const getPlayerScore = (score = []) => new Promise ((resolve) => {
  resolve(throwDice()
    .then(d1 => score.push(d1))
    .then(d2 => score.push(d2))
    .then(() => score))
})

getPlayerScore()
  .then(console.log)*/

/*const startGame = (game=[]) => new Promise ( (resolve) => {
  getPlayerScore()
    .then(p1 => getPlayerScore()
      .then(p2 => getPlayerScore()
        .then(p3 => resolve([p1, p2, p3]))))
})

startGame()
  .then(console.log)*/

/*
const getPlayerScore = () => Promise.all([throwDice(), throwDice()])

getPlayerScore().then(resolve => console.log(resolve))

const startGame = () => Promise.all([getPlayerScore(), getPlayerScore(), getPlayerScore()])

startGame().then(resolve => console.log(resolve))*/

/*const getRandom= () => ~(Math.random() * 6 + 1);

const throwDice = async () => {
  await wait(1000)
  return getRandom();
}

const getPlayerScore = async () => [await throwDice(), await throwDice()];

const startGame = async () => {
  return [
    await getPlayerScore(),
    await getPlayerScore(),
    await getPlayerScore()
  ]
}*/


/*const myFunc = async () => console.log(await throwDice())
const myFunc2 = async () => console.log(await getPlayerScore())
const myFunc3 = async () => console.log(await startGame())

ES LO MISMO QU ELO DA ABAJO

*/

/*(async () => {
  console.log(await throwDice());
  console.log(await getPlayerScore());
  console.log(await startGame());
})();

console.log(throwDice())*/

/*const urls = ['url1', 'url2']

const getJSON = async (arg) => {
  return await wait(1000).then(() => {
    return { param: arg };
  });
};*/

/*const asyncMap = async (url, cb) => {
  const resultingArray = urls.map(async (url) => await cb(url))
  return await resultingArray;
}

const results = await asyncMap(urls, getJSON())

const myFunc = async () => console.log(await results())*/

/*(async () => {
  myFunction()
  myFunction()
})*/


/*const urls = [url1, url2];
const results = await asyncSequentialMap(urls, getJSON);

const asyncSequentialMap = async(urls, cb, result=[]) => {
  if(!urls.length) return;

  const elment = await Promise.race(urls.map(cb))
  return await retult.push(element)

}*/



const promiseAllSafe = async (list) => {
  const results = [];
  for(const item of list) {
    try {
     results.push(await item)
    } catch (err) {
      results.push(null)
    }
  }
  return results;
};



(async () => {
  console.log(
    await promiseAllSafe([
      Promise.resolve(1),
      Promise.reject("stack overflow"),
      Promise.resolve(3),
    ])
  );
})(); // [1, null, 3]





