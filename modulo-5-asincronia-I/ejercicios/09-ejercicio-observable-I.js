// Implementa un observable

// AQUI, completa esta clase observable
// o usa otro tipo de implementación (closures, etc)
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

// Código a ejecutar:
const eventManager = new EventManager();

const explosionCallback = () => console.log("explosion");
const smokeCallback = () => console.log("smoke");

eventManager.on("detonate", explosionCallback);
eventManager.on("detonate", smokeCallback);
eventManager.emit("detonate"); // Deberian ejecutarse los callbacks anteriores

eventManager.off("detonate", explosionCallback);
eventManager.emit("detonate"); // Deberian ejecutarse solo el callback "smokeCallback"
