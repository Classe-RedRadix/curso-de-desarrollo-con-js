// Crea una función bind que reciba los parámetros context y func
// Debe devolver una versión de func que se ejecute usando el contexto context
// Utiliza call o apply

const user = {
  name: "Peter",
};

function greeter() {
  console.log("My name is", this.name);
}

// Implementa aqui tu función bind
function bind(user, fn){
  return () => fn.call(user)
} 

const boundGreeter = bind(user, greeter);

boundGreeter(); // Este resultado debe ser igual que ejecutar el código greeter.call(user)