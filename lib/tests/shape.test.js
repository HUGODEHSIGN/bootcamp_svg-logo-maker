import Shape from '../shape';

describe('Shape', () => {
  describe('instance of', () => {
    it('should create a new instance of Shape', () => {
      const shape = new Shape();
      expect(shape).toBeInstanceOf(Shape);
    });
  });

  describe('should have fill property', () => {
    const shape = new Shape('green');
    expect(shape.fill).toBe('green');
  });

  describe('should throw error when running render() method', () => {
    const shape = new Shape('red');
    const err = new Error('Please add render function to subclasses');
    expect(() => shape.render()).toThrow(err);
  });
});
