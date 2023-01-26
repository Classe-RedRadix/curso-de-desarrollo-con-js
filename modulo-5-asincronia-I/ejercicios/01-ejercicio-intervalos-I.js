/**
 * Crea una variable contador que empiece valiendo 0.
 * Incrementa el contador cada segundo e imprímelo.
 */

/*
setInterval(function() {
    console.log("Hey cada 2 segundos");
}, 2000);

*/

let count = 0;
console.log(count);
const interval = setInterval(function() {
    count += 1;
    console.log(count);
}, 1000);

setTimeout(function() {
    clearInterval(interval);
}, 5000);

// setTimeout
// clearTimeout