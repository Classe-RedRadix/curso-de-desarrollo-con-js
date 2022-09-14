// Ejercicio objetos
function mapKeys(obj, func) {
  const result = {};
  for (let key of Object.keys(obj)) {
    result[func(key)] = obj[key];
  }
  return result;
}

const obj = { a: 1, b: 2, c: 3 };
const result = mapKeys(obj, (key) => key.toUpperCase());
console.log(result);

// Ejercicio objetos II
function mapValues(obj, func) {
  const result = {};
  for (let key of Object.keys(obj)) {
    result[key] = func(obj[key]);
  }
  return result;
}

const obj = { a: 1, b: 2, c: 3 };
const result = mapValues(obj, (x) => x * 2);
console.log(result);

// Ejercicio objetos III
// Object.assign({}, a, b, c)

// Ejercicio objetos IV
function clone(obj) {
  return Object.assign({}, obj);
}

const source = { a: 1, b: 2 };
const copy = clone(source);
console.log(copy);
console.log(copy === source);

// Ejercicio objetos V
function sumObject(node) {
  if (typeof node === "number") return node;
  if (typeof node === "object") {
    return Object.values(node).reduce(
      (acc, subnode) => acc + sumObject(subnode),
      0
    );
  }
}

console.log(sumObject({ a: 1, b: { c: 2, d: 5, e: { f: 9, g: 6 } } }));

// Ejercicio objetos VI
function traverse(node, func) {
  if (typeof node !== "object") return func(node);
  if (typeof node === "object") {
    const result = {};
    Object.entries(node).forEach(([key, subnode]) => {
      result[key] = traverse(subnode, func);
    });
    return result;
  }
}

const mutation = traverse(
  { a: 1, b: { c: 2, d: 5, e: { f: 9, g: 6 } } },
  (num) => num * 100
);

console.log(mutation);

// Ejercicio objetos VII
function cloneDeep(node) {
  if (typeof node !== "object") return node;
  if (Array.isArray(node)) {
    return node.map((subnode) => cloneDeep(subnode));
  }
  if (typeof node === "object") {
    const result = {};
    Object.entries(node).forEach(([key, subnode]) => {
      result[key] = cloneDeep(subnode);
    });
    return result;
  }
}
const source = {
  a: { lorem: "ipsum" },
  b: [1, 2, { Homer: "Simpson" }],
  c: 25,
};
const copy = cloneDeep(source);
console.log(copy); // debe ser igual
copy.a.lorem = "change";
copy.b[2].Homer = "change";
console.log(source); // no debe haber cambiado

// Ejercicio objetos VIII
function meld(target = {}, source) {
  for (let [key, value] of Object.entries(source)) {
    target[key] = value instanceof Object ? meld(target[key], value) : value;
  }
  return target;
}

function merge(target, ...args) {
  // también puedes usar un reduce
  for (let source of args) {
    target = meld(target, source);
  }
  return target;
}

const config = {
  server: {
    hostname: "myapp.domain.com",
    port: 443,
    protocol: "https",
  },
  database: {
    host: "192.169.1.2",
    port: 33299,
  },
};

const testConfig = merge(config, {
  server: { hostname: "localhost" },
  database: { host: "localhost" },
});

console.log(testConfig);

// Ejercicio destructuring
const { uno, dos } = { uno: 1, dos: 2 };
console.log(uno, dos);

// Ejercicio destructuring II
let a = 1;
let b = 2;
[b, a] = [a, b];
console.log(a, b);

// Ejercicio destructuring III
const {
  uno,
  lista: [dos, tres],
  cuatro,
  x: { cinco },
} = { uno: 1, lista: [2, 3], cuatro: 4, x: { cinco: 5 } };

// Ejercicio destructuring IV
const [
  {
    lista: [
      ,
      {
        x: { y: dos },
      },
    ],
  },
] = [{ lista: [1, { x: { y: 2 } }] }];

// Ejercicio contexto
function func() {
  console.log(this.num); // Debería imprimir 10
}

let obj = {
  callFun: func,
};

obj.callFun.apply({ num: 10 });

// Ejercicio contexto II
function bind(context, func) {
  return (...args) => {
    func.apply(context, args);
  };
}

const bound = bind({ num: 10 }, obj.callFun);
bound();

// Ejercicio getters y setters
const array = [1, 2, 3, 4];
Object.defineProperty(array, "average", {
  get: function () {
    return this.reduce((acc, x) => acc + x, 0) / this.length;
  },
});

console.log(array.average);

// Ejercicio getters y setters II
const obj = {
  history: [],
  undo: function () {
    this.history.pop();
  },
};

Object.defineProperty(obj, "value", {
  set: function (value) {
    this.history.push(value);
  },
  get: function () {
    return this.history[this.history.length - 1];
  },
});

obj.value = 1;
obj.value = 2;

console.log(obj.value);
obj.undo();
console.log(obj.value);

// Ejercicio prototipos
const c = Object.create(null, {
  cinco: { value: 5 },
  seis: { value: 6 },
});

const b = Object.create(c, {
  tres: { value: 3 },
  cuatro: { value: 4 },
});

const a = Object.create(b, {
  uno: { value: 1 },
  dos: { value: 2 },
});

// Ejercicio prototipos II
// undefined, su prototipo inicial no es Object
