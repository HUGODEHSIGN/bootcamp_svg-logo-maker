import Circle from '../shapes/circle.js';

describe('Circle', () => {
  describe('instance of', () => {
    it('should create a new instance of Circle', () => {
      const circle = new Circle();
      expect(circle).toBeInstanceOf(Circle);
    });
  });

  describe('should have fill property', () => {
    const circle = new Circle('green');
    expect(circle.fill).toBe('green');
  });

  describe('should output right svg string', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe(
      '<circle cx="150" cy="100" r="80" fill="red" />'
    );
  });
});
