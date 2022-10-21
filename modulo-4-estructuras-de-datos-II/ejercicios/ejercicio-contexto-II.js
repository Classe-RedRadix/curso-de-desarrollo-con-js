function bind(context, func) {
  return function () {
    func.call(context);
  };
}

let name = "Alberto";

function testFunction() {
  console.log(this.name);
}

const binded = bind({ name: "Paco" }, testFunction);

binded();
