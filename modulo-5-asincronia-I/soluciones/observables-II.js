// Ejercicio observables II
const events = {};
const onceEvents = {};

function emit(key) {
  if (events[key]) events[key].forEach((callback) => callback());
  if (onceEvents[key]) {
    onceEvents[key].forEach((callback) => callback());
    onceEvents[key] = [];
  }
}

function on(key, callback) {
  events[key] = events[key] || [];
  events[key].push(callback);
}

function off(key, callback) {
  events[key] = events[key].filter((f) => f !== callback);
}

function once(key, callback) {
  onceEvents[key] = onceEvents[key] || [];
  onceEvents[key].push(callback);
}

module.exports = { emit, on, once, off };
