const SPEED = 0.02;

export default class Paddle {
  constructor(paddleElements) {
    this.paddleElements = paddleElements;
    this.reset();
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElements).getPropertyValue("--position")
    );
  }

  set position(value) {
    this.paddleElements.style.setProperty("--position", value);
  }

  rect() {
    return this.paddleElements.getBoundingClientRect();
  }

  reset() {
    this.position = 50;
  }

  update(delta, ballHight) {
    this.position += SPEED * delta * (ballHight - this.position);
  }
}
