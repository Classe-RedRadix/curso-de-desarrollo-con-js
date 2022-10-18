function greeter() {
  console.log(this.num); // Debería imprimir 10
}

// Arregla este código sin modificar func ni obj

let obj = {
  callFun: greeter,
};

obj.callFun();
