import module from '../spinner';

describe('spinner', () => {
  describe('text', () => {
    it('should contain the current step and the max', () => {
      const actual = module(42).text('foo');

      expect(actual).toContain('0/42');
      expect(actual).toContain('foo');
    });
  });
  describe('tick', () => {
    it('should increment the current step', () => {
      const actual = module(42);

      actual.tick();
      actual.tick();
      actual.tick();

      expect(actual).toHaveProperty('spinner.current', 3);
    });
    it('should update the text', () => {
      const actual = module(42);

      actual.tick('foo');
      actual.tick('bar');
      actual.tick('baz');

      expect(actual.spinner.text).toContain('baz');
    });
  });
  describe('succeed', () => {
    it('should succeed the internal spinner', () => {
      const actual = module(42);
      const mockInternalSucceed = jest
        .spyOn(actual.spinner, 'succeed')
        .mockReturnValue();
      jest.spyOn(actual, 'text').mockReturnValue('success');

      actual.succeed('foo');

      expect(mockInternalSucceed).toHaveBeenCalledWith('success');
    });
  });
  describe('fail', () => {
    it('should fail the internal spinner', () => {
      const actual = module(42);
      const mockInternalFail = jest
        .spyOn(actual.spinner, 'fail')
        .mockReturnValue();
      jest.spyOn(actual, 'text').mockReturnValue('failure');

      actual.fail('foo');

      expect(mockInternalFail).toHaveBeenCalledWith('failure');
    });
  });
});
