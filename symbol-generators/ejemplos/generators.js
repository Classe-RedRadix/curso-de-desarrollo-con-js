function oddManualGenerator() {
  let number = 0;
  let isFirstNextCalled = false;

  return {
    next(value) {
      if (isFirstNextCalled && value) {
        console.log("Outside value:", value);
      }

      if (!isFirstNextCalled) {
        isFirstNextCalled = true;
      }

      number += 2;

      return {
        value: number,
        done: false,
      };
    },
  };
}

const oddManual = oddManualGenerator();

console.log("Manual generator:");
console.log("Generated value #1:", oddManual.next("x").value);
console.log("Generated value #2:", oddManual.next("y").value);
console.log("Generated value #3:", oddManual.next("z").value);
console.log("\n");

function* oddRealGenerator() {
  let number = 0;

  while (true) {
    number += 2;
    const outsideVale = yield number;
    console.log("Outside value:", outsideVale);
  }
}

const realGenerator = oddRealGenerator();

console.log("Real generator:");
console.log("Generated value #1:", realGenerator.next("x").value);
console.log("Generated value #2:", realGenerator.next("y").value);
console.log("Generated value #3:", realGenerator.next("z").value);
console.log("\n");

const person = {
  name: "Pepe",
  age: 25,
};

try {
  console.log([...person]); // Destructuración usa el patron iterator
} catch (error) {
  console.error(error.message); // Error! Un objeto no integra el paton iteración
}

person[Symbol.iterator] = function* () {
  const props = Object.keys(this);

  for (let index = 0; index < props.length; index++) {
    yield this[props[index]];
  }
};

console.log([...person]); // ["Pepe", 25]

const EXTENDED_ENTRIES = Symbol("Extended entries iterator");

person[EXTENDED_ENTRIES] = function* () {
  const props = Object.keys(this);

  for (let index = 0; index < props.length; index++) {
    const prop = props[index];
    const value = this[prop];

    yield [index, prop, value];
  }
};

const personExtendedEntries = person[EXTENDED_ENTRIES]();

// for..of usa el patron iterator internamente
for (const [index, prop, value] of personExtendedEntries) {
  console.log(index, prop, value);
}

const generator = function* () {
  const a = yield Promise.resolve("a");
  console.log("Value returned is", a);
  const b = yield Promise.resolve("b");
  console.log("Value returned is", b);
};

const gen = generator();

console.log("\n");

// 1️⃣ Ejecutamos la primera iteración y guardamos el resultado...
const firstIteration = gen.next();

// 2️⃣ El value de este valor yieldeado es una promesa...
const firstPromise = firstIteration.value;

let secondIteration = null; // 👈🏻 Para luego

firstPromise
  .then((char) => {
    console.log(char); // "a" (El valor que resuelve la promesa)

    // 3️⃣ Continuamos la ejecución del generador, pasando un valor al mismo
    const secondIteration = gen.next(char);
    const secondPromise = secondIteration.value;

    return secondPromise;
  })
  .then((char) => {
    console.log(char); // "b" (El valor que resuelve la promesa)

    // 4️⃣ Continuamos la ejecución del generador, pasando un valor al mismo
    // ❗ Esta iteración llega hasta el final, donde no devolvemos nada,
    // por lo que thirdIteration.value sera undefined.
    // Aqui terminamos la ejecución del generador, ya que thirdIteration.done es "true"
    const thirdIteration = gen.next(char);

    console.log(thirdIteration.value === undefined); // true
    console.log(thirdIteration.done === true); // true
  });
