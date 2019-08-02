import module from '../lodash';

describe('lodash', () => {
  describe('flatten', () => {
    it('should flatten arrays', () => {
      const input = [1, [2, [3, [4]], 5]];
      const expected = [1, 2, [3, [4]], 5];

      const actual = module.flatten(input);

      expect(actual).toEqual(expected);
    });
    it('should flatten objects', () => {
      const input = {
        foo: {
          bar: ['baz', 'quxx'],
        },
      };
      const expected = {
        'foo.bar.0': 'baz',
        'foo.bar.1': 'quxx',
      };

      const actual = module.flatten(input);

      expect(actual).toEqual(expected);
    });
  });
  describe('unflatten', () => {
    it('should unflatten objects', () => {
      const input = {
        'foo.bar.0': 'baz',
        'foo.bar.1': 'quxx',
      };
      const expected = {
        foo: {
          bar: ['baz', 'quxx'],
        },
      };

      const actual = module.unflatten(input);

      expect(actual).toEqual(expected);
    });
  });
});