/**
 * Implementa la función throttle.
 */

function throttle(func, milliseconds) {

  // mi control de ejecución
  let canExecute = true;

  return (...args) => {

    // si no se debe ejecutar, no le dejo pasar
    if (!canExecute) return;

    // si se va a ejecutar, marco que ya no se pueda ejecutar en el futuro
    func(...args);
    canExecute = false;

    // reseteo el control de ejecución
    setTimeout(() => {
      canExecute = true;
    }, milliseconds);
  }
}

const spam = () => console.log("SPAM!");

const throttledSpam = throttle(spam, 500);

throttledSpam(); // SPAM!
throttledSpam(); // (Sin log)
throttledSpam(); // (Sin log)
throttledSpam(); // (Sin log)

setTimeout(throttledSpam, 600); // SPAM!
