import Shape from '../shape.js';

export default class Triangle extends Shape {
  constructor(fill) {
    super(fill);
  }
  render() {
    return `<polygon points="150 10, 250 180, 50 180" fill="${this.fill}"/>`;
  }
}
