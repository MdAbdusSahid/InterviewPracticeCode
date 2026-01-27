class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    (this.events[event] || (this.events[event] = [])).push(listener);
  }
  emit(event, ...args) {
    (this.events[event] || []).forEach((fn) => fn(...args));
  }
  off(event, listener) {
    this.events[event] = (this.events[event] || []).filter(
      (fn) => fn !== listener,
    );
  }
}
