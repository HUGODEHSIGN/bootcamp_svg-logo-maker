import Shape from '../shape.js';

export default class Circle extends Shape {
  constructor(fill) {
    super(fill);
  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.fill}" />`;
  }
}
