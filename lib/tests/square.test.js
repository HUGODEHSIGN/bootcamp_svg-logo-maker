import Square from '../shapes/square.js';

describe('Square', () => {
  describe('instance of', () => {
    it('should create a new instance of Square', () => {
      const square = new Square();
      expect(square).toBeInstanceOf(Square);
    });
  });

  describe('should have fill property', () => {
    const square = new Square('green');
    expect(square.fill).toBe('green');
  });

  describe('should output right svg string', () => {
    const square = new Square('red');
    expect(square.render()).toBe(
      `<rect x="68" y="25" width='160' height='160' fill='red' />`
    );
  });
});
