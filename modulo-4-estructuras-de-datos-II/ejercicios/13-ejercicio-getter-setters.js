/**
 * Añade una propiedad average a un array que devuelva la media de los valores del array.
 */

const array = [1, 2, 3, 4, 5, 6];

Object.defineProperty(array, 'average', {
    get: function() {
        const count = this.length;
        const sum = this.reduce((total, item) => total + item, 0);
        return sum/count;
    }
})

console.log(array.average); // Deberiamos obtener 2


const object = {
    _historic: [],
    set value(value) {
      this._historic.push(value);
    },
    get value() {
      return this._historic[this._historic.length - 1];
    },
    undo() {
      this._historic = this._historic.slice(0, this._historic.length - 1);
    },
};

object.value = 1;

console.log(object.value);

object.value = 2;

console.log(object.value);

object.value = 3;

console.log(object.value);

object.undo();

console.log(object.value);