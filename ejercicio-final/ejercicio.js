// Implementa como se especifica en README.md el ejercicios

const futureValue = (value, millisecondsWait) =>
  new Promise((resolve) => 
      setTimeout(() => resolve(value), millisecondsWait)
    );

  function asynk(generator) {
    const gen = generator();
    
    // we have to return a function
    return function() {
      // this is the inner function which does the recursive calls. 
      // Its argument is the next() return
      function recursive_asynk(next_result) {
        return new Promise((resolve, reject) => {
          if (next_result.done === true) {
            return resolve();
          }

          next_result.value.then((val) => {
            resolve(recursive_asynk(gen.next(val)));
          }).catch(() => reject(new Error("Asynk call Error")));
        });
      }

      // Here starts everything, with the first next call
      return recursive_asynk(gen.next());
    }
  }

const main = asynk(function* () {
  const one = yield futureValue(1, 1000);
  console.log(one); // 1 -> al segundo
  const two = yield futureValue(2, 1000);
  console.log(two); // 2 -> a los dos segundos

  const letters = ["C", "L", "A", "S", "S", "E"];

  for (let index = 0; index < letters.length; index++) {
    const wait = index * 1000 || 1000;
    const letter = yield futureValue(letters[index], wait);

    console.log("Letter #%d is %s", index, letter);
  }
});

main();

// Test nested asynk 
const main2 = asynk(function* () {
  yield asynk(function* () {
    const three = yield futureValue(3, 1000);
    console.log(three);
    const four = yield futureValue(4, 1000);
    console.log(four);
  })();
  yield asynk(function* () {
    const five = yield futureValue(5, 1000);
    console.log(five);
    const six = yield futureValue(6, 1000);
    console.log(six);
  })();
});

main2();