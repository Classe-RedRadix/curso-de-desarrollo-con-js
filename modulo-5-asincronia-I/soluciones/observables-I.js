// Ejercicio observables I
const events = {};

function emit(key) {
  if (events[key]) events[key].forEach((callback) => callback());
}

function on(key, callback) {
  events[key] = events[key] || [];
  events[key].push(callback);
}

function off(key, callback) {
  events[key] = events[key].filter((f) => f !== callback);
}

module.exports = { emit, on, off };
