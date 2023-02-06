/**
 * Implementa una clase con dos propiedades que usen simbolos.
 * - La primera propiedad, debe almacenar el nombre del usuario.
 * - La segunda propiedad, debe almacenar el apellido.
 * - Debe poder almacenarse datos en estas propiedades a traves de setters ("name" y "lastname")
 * - El getter "fullname" debe devolver concatenado el nombre completo (nombre + apellido)
 * - El nombre y el apellido nunca seran accesibles de manera independiente (no hacen falta getters para los mismos.)
 */

const USER_NAME = Symbol("User name");
const USER_LASTNAME = Symbol("User lastname");

class User {
  // ? Propiedad privada name
  [USER_NAME] = null;
  // ? Propiedad privada lastname
  [USER_LASTNAME] = null;

  set name(value) {
    this[USER_NAME] = value;
  }

  set lastname(value) {
    this[USER_LASTNAME] = value;
  }

  get fullname() {
    return `${this[USER_NAME]} ${this[USER_LASTNAME]}`;
  }
}

const user = new User();

user.name = "John";
user.lastname = "Doe";

console.log(user.name); // undefined
console.log(user.lastname); // undefined
console.log(user.fullname); // "John Doe"
