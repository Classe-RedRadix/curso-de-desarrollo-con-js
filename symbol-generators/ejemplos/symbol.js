/**
 * Symbol: Un tipo de datos único e inmutable en JavaScript.
 * Se utiliza como clave en objetos para identificar propiedades únicas
 * y evitar conflictos en nombres de propiedades. Representa un
 * identificador único.
 * Se considera primitivo porque no es un valor compuesto, pero
 * su comparación se hace por referencia, por lo que no hay dos simbolos
 * iguales aunque tengan la misma descripción.
 */

// 👇🏻 Nuestro indentificador unico que usamos como clave. "Weight prop (kg)" es la descripción, opcional pero deseable.
const WEIGHT_PROP = Symbol("Weight prop (kg)");

class Weight {
  // 👇🏻 Aqui es donde almacenaremos los datos de forma segura
  [WEIGHT_PROP] = null;
  version = "1.0.0";

  get kg() {
    // 👇🏻 Desde dentro de la clase, no podemos usar la propiedad si no usamos el simbolo.
    return this[WEIGHT_PROP];
  }

  set kg(value) {
    // 👇🏻 Podemos modificar el simbolo como si fuera otra propiedad cualquiera.
    this[WEIGHT_PROP] = value;
  }

  get lb() {
    return this[WEIGHT_PROP] * 2.20462;
  }

  set lb(value) {
    this[WEIGHT_PROP] = value / 2.20462;
  }
}

const weight = new Weight();

weight.lb = 15;

console.log(weight.kg); // 6.8038936415345965
console.log(weight.lb); // 15

console.log(weight.WEIGHT_PROP); // 👈🏻 undefined, porque esta propiedad no existe.
console.log(weight[WEIGHT_PROP]); // 👈🏻 Recibimos el valor, ya que la propiedad es accesible si usamos la referencia del symbol.

console.log(Object.keys(weight)); // ["version"]
// 👆🏻 Solo recibiremos por consola la propiedad "version",
// ya que los getters y setters se consideran ocultos (no enumberables)
// para la iteración. Tampoco recibiremos las propiedades donde su clave es un
// Symbol, por el mismo motivo; no es visible de forma predefinida.

console.log(Object.getOwnPropertySymbols(weight)); // [Symbol(Weight prop (kg))]
// 👆🏻 Aqui recibiremos una lista de propiedades que usan Symbol, en este caso
// la unica propiedad que usa symbol con su descripción.
