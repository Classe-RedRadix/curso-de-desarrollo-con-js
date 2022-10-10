function me() {
  return "Hola, soy 👨‍💻";
}

function greet(fn) {
  console.log(fn);
}

function greeter() {
  return function () {
    return "Hola, soy 👨‍💻";
  };
}
