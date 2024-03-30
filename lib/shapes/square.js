import Shape from '../shape.js';

export default class Square extends Shape {
  constructor(fill) {
    super(fill);
  }
  render() {
    return `<rect x="68" y="25" width='160' height='160' fill='${this.fill}' />`;
  }
}
