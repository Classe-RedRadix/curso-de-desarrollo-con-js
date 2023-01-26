class A {
    aProperty() {
        console.log(this);
    }

    getFunctionDeInterfaz() { // forma de controlar que una clase que hereda no tiene sobreescrito este método
        throw new Error("método no implementado, ¡¡aviso!!")
    }
}

class B extends A {
    b = 1;

    get b() {
        return this.b;
    }
}

class C extends B {
    constructor() { // si no definimos un constructor, Js lo crea por defecto, y con super
        super(); // siempre que utilizamos un extend hay que usar un super()
        this.c = 'hey'; // se le pueden añadir propiedades de forma dinámica
    }

    cProperty() {
        console.log(this.b);
    }
}

const a = new A();
const b = new B();
const c = new C();
console.log('¿a es una instancia de la clase A?', a instanceof A);
console.log('a: ', a);
console.log('b: ', b);
console.log('c: ', c);