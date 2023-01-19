/**
 * Implementa una función retry idéntica a repeat, pero que sólo repita en caso de
 * producirse un error al llamar a la función.
 */

function retry(callback, times) {
  Array(times)
    .fill(callback)
    .forEach(func => {
      try {
        func();
      } catch (error) {
        console.log("lo que pasa si falla... Repito! " + times);
        retry(callback, --times);
      }
    });
}

function maybeFailingLogger() {
  const willFail = Math.random() > 0.5;

  if (willFail) throw new Error("Failed.");

  console.log("SPAM!");
}

retry(maybeFailingLogger, 3); // SPAM! SPAM! SPAM!
