// Ejercicio variables
function createFns() {
  let fns = [];

  for (let i = 0; i < 10; i++) {
    // ^ hay que cambiar el var por un let
    fns.push(function () {
      console.log(i);
    });
  }
  return fns;
}

// Ejercicio variables II
function randomNumber(n) {
  let base; // <- hay que mover el let fuera del bloque
  if (Math.random() > 0.5) {
    base = 1;
  } else {
    base = -1;
  }
  return base * n * Math.random();
}

// Ejercicio truthiness
// "Abc" -> Truthy
// 20 -> Truthy
// "20" -> Truthy
// "0" -> Truthy
// 0 -> Falsy
// ""  -> Falsy
// "undefined" -> Truthy
// undefined -> Falsy
// null -> Falsy
