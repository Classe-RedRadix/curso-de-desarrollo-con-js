/**
 * No deberíamos poder detonar una bomba más de una vez.
 * Añade un método once al eventManager que suscriba un
 * callback que se ejecutará sólo la primera vez que se
 * emita ese evento.
 */

const EventManager = require("./09-ejercicio-observable-I");

class EventManagerOnce extends EventManager {

  onceListener = "";
  
  constructor() {
    super();
  }

  once(topic, listener) {
    this.on(topic, listener);
    this.onceListener = listener;
  }

  emit(topic) {
    this.off(topic, this.onceListener);
  }
}

const eventManagerOnce = new EventManagerOnce();

const callback = () => {
  console.log("explosion");
  console.log("smoke");
  console.log("hey");
};

eventManagerOnce.once("detonate", callback);
eventManagerOnce.emit("detonate");
// Logs recibidos:
// - smoke
// - explosion

eventManagerOnce.emit("detonate");
// Sin logs

eventManagerOnce.emit("detonate");
eventManagerOnce.emit("detonate");
eventManagerOnce.emit("detonate");