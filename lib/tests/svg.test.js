import SVG from '../svg';
import Triangle from '../shapes/triangle';
import Circle from '../shapes/circle';
import Text from '../text';

describe('SVG', () => {
  describe('instance of', () => {
    it('should create a new instance of SVG', () => {
      const svg = new SVG();
      expect(svg).toBeInstanceOf(SVG);
    });
  });

  describe('render() method should return proper svg format', () => {
    const text = new Text('sdf', 'triangle');
    const circle = new Circle('green');
    const svg = new SVG(text, circle);
    expect(svg.render()).toBe(
      `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">sdf</text>
    <circle cx="150" cy="100" r="80" fill="green" />
    </svg>`
    );
  });
});
