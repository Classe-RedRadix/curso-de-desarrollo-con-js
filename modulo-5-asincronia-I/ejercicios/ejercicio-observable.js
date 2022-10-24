// Implementa un observable

// AQUI, completa esta clase observable
// o usa otro tipo de implementación (closures, etc)
class Observable {
  on() {}
  off() {}
  emit() {}
}

// Código a ejecutar:
const observable = new Observable();

const explosionCallback = () => console.log("explosion");
const smokeCallback = () => console.log("smoke");

observable.on("detonate", explosionCallback);
observable.on("detonate", smokeCallback);
observable.emit("detonate"); // Deberian ejecutarse los callbacks anteriores

observable.off("detonate", explosionCallback);
observable.emit("detonate"); // Deberian ejecutarse solo el callback "smokeCallback"
