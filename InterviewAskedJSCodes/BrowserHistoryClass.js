class BrowserHistory {
  constructor(home) {
    this.history = [home];
    this.current = 0;
  }
  visit(page) {
    this.history = this.history.slice(0, this.current + 1);
    this.history.push(page);
    this.current++;
  }
  back(steps) {
    this.current = Math.max(0, this.current - steps);
    return this.history[this.current];
  }
  forward(steps) {
    this.current = Math.min(this.history.length - 1, this.current + steps);
    return this.history[this.current];
  }
  getCurrentPage() {
    return this.history[this.current];
  }
}
