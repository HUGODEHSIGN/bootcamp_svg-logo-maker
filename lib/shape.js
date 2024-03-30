export default class Shape {
  constructor(fill) {
    this.fill = fill;
  }
  render() {
    throw new Error('Please add render function to subclasses');
  }
}
