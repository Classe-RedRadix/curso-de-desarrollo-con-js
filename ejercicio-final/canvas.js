// const futureValue = (value, millisecondsWait) =>
//     new Promise((resolve) => setTimeout(() => resolve(value), millisecondsWait));

// function* main() {
//     const one = yield futureValue(1, 1000);
//     console.log(one); // 1 -> al segundo
//     const two = yield futureValue(2, 1000);
//     console.log(two); // 2 -> a los dos segundos
// }

// const it = main();

// it.next();
// it.next();


// function* countThings() {
//     const letras = ["a", "b", "c"];
//     for (let index = 0; index < letras.length; index++) {
//         const element = letras[index];
//         yield console.log(element);
//     }
// }

// const it = countThings();

// it.next();
// it.next();

// function* counter() {
//     console.log("Devolviendo 1...");
//     yield 1;
//     console.log("Devolviendo 2...");
//     yield 2;
//     console.log("Devolviendo 3...");
//     yield 3;
// }

// // para utilizar un generador hay que instanciarlo
// const generator = counter();

// // para ejecutar el generador utilizamos `next`
// console.log(generator.next(1)); // hasta el primer yield y devuelve 1
// console.log(generator.next(2));


function* generator() {
    while (true) {
        const value = yield;
        console.log(value);
    }
}

const gen = generator();
gen.next();
gen.next(1); // "{ value: null, done: false }"
// No hemos llegado al console.log: el valor de `next` se pierde

gen.next(2); // "{ value: null, done: false }"
  // console.log -> 2