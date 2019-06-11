import module from '../loader';

describe('loader', () => {
  describe('loadDependency', () => {
    it('should load dependency using .default', () => {
      jest.spyOn(module, '__require').mockReturnValue({ default: 'bar' });

      const actual = module.loadDependency('foo');

      expect(actual).toEqual('bar');
    });
    it('should load dependency at the root', () => {
      jest.spyOn(module, '__require').mockReturnValue('bar');

      const actual = module.loadDependency('foo');

      expect(actual).toEqual('bar');
    });
  });
  describe('import', () => {
    beforeEach(() => {
      jest.spyOn(module, 'loadDependency').mockImplementation(dep => ({
        depName: dep,
      }));
    });
    it('should load dependency for each key', () => {
      const input = ['foo', 'bar'];

      const actual = module.import(input);

      expect(actual).toHaveProperty('foo.depName', 'foo');
      expect(actual).toHaveProperty('bar.depName', 'bar');
    });
    it('should convert names to camelCase', () => {
      const input = ['foo-bar'];

      const actual = module.import(input);

      expect(actual).toHaveProperty('fooBar.depName', 'foo-bar');
    });
  });
});
