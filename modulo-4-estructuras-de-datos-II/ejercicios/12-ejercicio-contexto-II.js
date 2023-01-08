/**
 * Crea una función bind que reciba los parámetros context y func
 * - Debe devolver una versión de func que se ejecute usando el contexto context
 * - Utiliza call o apply
 */

const user = {
  name: "Peter",
};

function greeter() {
  console.log("My name is", this.name);
}

// ?

const boundGreeter = bind(user, greeter);

boundGreeter(); // My name is Peter
