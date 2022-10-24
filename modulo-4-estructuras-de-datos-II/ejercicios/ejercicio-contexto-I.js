function greeter() {
  console.log(this.num); // Debería imprimir 10
}

// Arregla este código sin modificar func ni obj
let obj = {
  callFun: greeter,
};

let context = {
  num: 10,
};

const caller = () => obj.callFun.call(context);

caller();
