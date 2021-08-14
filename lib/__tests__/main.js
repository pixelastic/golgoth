const current = require('../main.js');

describe('index', () => {
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
    expect(current._).toEqual(current.lodash);
  });
});
