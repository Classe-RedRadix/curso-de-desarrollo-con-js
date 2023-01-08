/**
 * Arregla este código sin modificar func ni obj
 */

function func() {
  console.log(this.num); // 10
}

let obj = {
  callFunc: func,
};

obj.callFunc();
