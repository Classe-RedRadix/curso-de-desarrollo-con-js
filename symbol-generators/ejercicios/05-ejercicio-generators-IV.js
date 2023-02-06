/**
 * Crea un generator que pare su iteración si desde fuera le decimos que hemos terminado.
 * - Por cada iteración, se logara un mensaje diciendo "Sigo ejecutandome...".
 * - Si le hemos dicho desde fuera que pare, recibiremos un mensaje en consola "Voy a parar."
 * - Aunque volvamos a llamar a next(), no deberiamos recibir ningun mensaje por consola.
 */

function* generator(maxIterations) {

  for (let i = 0; i < maxIterations; i++) {
    const outsideValue = yield console.log("Sigo ejecutándome...");;
    if (outsideValue?.stop) {
      return console.log("Voy a parar.");
    };
  }
  
}

const gen = generator(100);

gen.next(); // "Sigo ejecutandome..."
gen.next(); // "Sigo ejecutandome..."
gen.next(); // "Sigo ejecutandome..."
gen.next(); // "Sigo ejecutandome..."
gen.next(); // "Sigo ejecutandome..."
gen.next({ stop: true }); // "Voy a parar."
gen.next(); // (No recibimos nada en consola.)
gen.next(); // (No recibimos nada en consola.)
