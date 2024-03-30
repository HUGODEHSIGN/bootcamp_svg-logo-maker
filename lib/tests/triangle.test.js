import Triangle from '../shapes/triangle.js';

describe('Triangle', () => {
  describe('instance of', () => {
    it('should create a new instance of Triangle', () => {
      const triangle = new Triangle();
      expect(triangle).toBeInstanceOf(Triangle);
    });
  });

  describe('should have fill property', () => {
    const triangle = new Triangle('green');
    expect(triangle.fill).toBe('green');
  });

  describe('should output right svg string', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toBe(
      `<polygon points="150 10, 250 180, 50 180" fill="red"/>`
    );
  });
});
