export default class Text {
  constructor(text, shape) {
    this.text = text;
    this.shape = shape;
  }
  render() {
    return `<text x="150" y="${
      this.shape === 'triangle' ? '150' : '125'
    }" font-size="60" text-anchor="middle" fill="white">${this.text}</text>`;
  }
}
