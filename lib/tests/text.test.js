import Text from '../text';

describe('Text', () => {
  describe('instance of', () => {
    it('should create a new instance of Text', () => {
      const text = new Text();
      expect(text).toBeInstanceOf(Text);
    });
  });

  describe('should have text property', () => {
    const text = new Text('asd', 'triangle');
    expect(text.text).toBe('asd');
  });

  describe('should have shape property', () => {
    const text = new Text('asd', 'triangle');
    expect(text.shape).toBe('triangle');
  });

  describe('should have 150 for y attribute when shape is triangle', () => {
    const text = new Text('asd', 'triangle');
    expect(text.render()).toBe(
      `<text x="150" y="150" font-size="60" text-anchor="middle" fill="white">asd</text>`
    );
  });

  describe('should have 125 for y attribute when shape is circle', () => {
    const text = new Text('asd', 'circle');
    expect(text.render()).toBe(
      `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">asd</text>`
    );
  });

  describe('should have 125 for y attribute when shape is square', () => {
    const text = new Text('asd', 'square');
    expect(text.render()).toBe(
      `<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">asd</text>`
    );
  });
});
