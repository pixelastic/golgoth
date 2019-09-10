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
    it('should unflatten objects with [1] for objects', () => {
      const input = {
        'foo.bar[0]': 'baz',
        'foo.bar[1]': 'quxx',
      };
      const expected = {
        foo: {
          bar: ['baz', 'quxx'],
        },
      };

      const actual = module.unflatten(input);

      expect(actual).toEqual(expected);
    });
    it('should unflatten objects with [] notation on root', () => {
      const input = {
        'foo[0].bar': 'bar',
        'foo[0].foo': 'foo',
        'foo[1].bar': 'bar',
        'foo[1].foo': 'foo',
      };
      const expected = {
        foo: [{ foo: 'foo', bar: 'bar' }, { foo: 'foo', bar: 'bar' }],
      };

      const actual = module.unflatten(input);

      expect(actual).toEqual(expected);
    });
  });
});
