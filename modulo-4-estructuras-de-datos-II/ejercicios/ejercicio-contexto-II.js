// Crea una función bind que reciba los parámetros context y func
// Debe devolver una versión de func que se ejecute usando el contexto context
// Utiliza call o apply
const bind = (context, fn) => {
  return function (...args) {
    return fn.call(context, ...args);
  };
};

const obj = {
  name: "Homer",
  greet: function (surname) {
    console.log(`Hola, soy ${this.name} ${surname}`);
  },
};

const newName = { name: "enrique" };

obj.greet("Gomez"); //normal

const binded = bind(newName, obj.greet);

binded("Diaz");
