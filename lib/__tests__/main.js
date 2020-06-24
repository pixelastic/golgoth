const current = require('../main.js');
const _ = require('lodash');
const chalk = require('chalk');

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
  it('should overwrite chalk with custom one', () => {
    expect(current.chalk).not.toEqual(chalk);
  });
  it('should allow access to lodash through _', () => {
    expect(current._).toEqual(current.lodash);
  });
  it('should have updated _.flatten method', () => {
    expect(current._.flatten).not.toEqual(_.flatten);
  });
  it('should have custom _.unflatten method', () => {
    expect(current._).toHaveProperty('unflatten');
  });
});
