import module from '../golgoth';
import loader from '../loader';
import _ from 'lodash';

describe('golgoth', () => {
  it('should load dependencies from package.json', () => {
    expect(module).toHaveProperty('chalk');
    expect(module).toHaveProperty('dayjs');
    expect(module).toHaveProperty('got');
    expect(module).toHaveProperty('lodash');
    expect(module).toHaveProperty('pAll');
    expect(module).toHaveProperty('pMap');
    expect(module).toHaveProperty('pMapSeries');
    expect(module).toHaveProperty('pify');
    expect(module).toHaveProperty('queryString');
  });
  it('should overwrite chalk with custom one', () => {
    const expected = loader.loadDependency('./chalk.js');
    expect(module.chalk).toEqual(expected);
  });
  it('should allow access to lodash through _', () => {
    expect(module._).toEqual(module.lodash);
  });
  it('should have updated _.flatten method', () => {
    expect(module._.flatten).not.toEqual(_.flatten);
  });
  it('should have custom _.unflatten method', () => {
    expect(module._).toHaveProperty('unflatten');
  });
});
