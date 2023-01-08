/**
 * Crea una clase EventManager que actúe como un observable.
 * Debe tener tres metodos:
 * - on: Con el que nos suscribimos.
 * - off: Con el que nos desuscribimos.
 * - emit: Cuando lo llamamos, deben ejecutarse los callbacks asociados.
 */

class EventManager {
  on() {
    // ?
  }
  off() {
    // ?
  }
  emit() {
    // ?
  }
}

const eventManager = new EventManager();

const explosionCallback = () => console.log("explosion");
const smokeCallback = () => console.log("smoke");

eventManager.on("detonate", explosionCallback);
eventManager.on("detonate", smokeCallback);
eventManager.emit("detonate");
// Logs recibidos:
// - explosion
// - smoke

eventManager.off("detonate", explosionCallback);
eventManager.emit("detonate");
// Logs recibidos:
// - smoke

module.exports = EventManager;
