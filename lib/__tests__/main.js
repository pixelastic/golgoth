import current from '../main.js';

describe('index', () => {
  // TODO: Test the three loading mechanism
  // Named export import { xxx } from golgoth
  // Specific export import xxx from 'golgoth/xxx' tnot sure can be tested
  // God mode:
  it('should load dependencies from package.json', () => {
    expect(current).toHaveProperty('chalk');
    expect(current).toHaveProperty('dayjs');
    expect(current).toHaveProperty('got');
    expect(current).toHaveProperty('lodash');
    expect(current).toHaveProperty('pAll');
    expect(current).toHaveProperty('pMap');
    expect(current).toHaveProperty('pMapSeries');
    expect(current).toHaveProperty('pify');
    expect(current).toHaveProperty('queryString');
  });
  it('should allow access to lodash through _', () => {
    // eslint-disable-next-line import/no-named-as-default-member
    expect(current._).toEqual(current.lodash);
  });
});
