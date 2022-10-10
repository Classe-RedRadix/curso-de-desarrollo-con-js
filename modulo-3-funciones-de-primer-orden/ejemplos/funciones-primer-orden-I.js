function me() {
  return "Hola, soy 👨‍💻";
}

// Pueden ser usadas como argumentos de función
const greet = (fn) => console.log(fn());
greet(me);

// 2. Pueden ser devueltas
function makeGreeter() {
  return me;
  //     ^ Estamos devolviendo una función!
}

// Podemos asignar el resultado a una variable y luego llamarlo, porque es una función
const greeter = makeGreeter();
greeter();

// Podemos ejecutarlo directamente
makeGreeter()();

// 3. Pueden ser asignadas como variables
const Person = {
  greet: () => console.log(me()),
};

Person.greet();
