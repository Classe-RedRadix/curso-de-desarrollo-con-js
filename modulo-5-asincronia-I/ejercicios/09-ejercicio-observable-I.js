/**
 * Crea una clase EventManager que actúe como un observable.
 * Debe tener tres metodos:
 * - on: Con el que nos suscribimos.
 * - off: Con el que nos desuscribimos.
 * - emit: Cuando lo llamamos, deben ejecutarse los callbacks asociados.
 */

class EventManager {
  listeners = {}

  on(topic, listener) {
    if (!this.listeners[topic]) {
      this.listeners[topic] = [];
    }

    this.listeners[topic].push(listener);
  }
  off(topic, listener) {
    this.listeners[topic].pop(listener);
  }
  emit(topic) {
    const topicListeners = this.listeners[topic];
    topicListeners.forEach(listener => listener());
  }
}

const eventManager = new EventManager();

const explosionCallback = () => console.log("explosion");
const smokeCallback = () => console.log("smoke");
const moreSmokeCallback = () => console.log("more smoke");
/*
eventManager.on("detonate", explosionCallback);
eventManager.on("detonate", smokeCallback);
eventManager.on("more-smoke", moreSmokeCallback);
eventManager.emit("detonate");
eventManager.emit("more-smoke");
// Logs recibidos:
// - explosion
// - smoke

eventManager.off("detonate", explosionCallback);
eventManager.emit("detonate");
// Logs recibidos:
// - smoke
*/
module.exports = EventManager;
