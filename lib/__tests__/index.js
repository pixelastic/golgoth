// This tests the actual built module in ./build/index.js
import _ from 'lodash';
import path from 'path';
import chalk from 'chalk';
import firost from 'firost';

describe('index', () => {
  let module;
  /**
   * This file tests the actual final built module. As there is some magic
   * involved in the way the file is built (see ./scripts/build.js), tests are
   * in order.
   * The downside is that we need to wait for the file to be built before being
   * able to run tests on it or tests will fail.
   * To do so, we add some waiting logic in the beforeAll below. What it
   * basically does is check every second if the content of the ./build/index.js
   * file starts with "use strict" (meaning its compile). It not, it checks
   * again in 1 second. If ok, it stops waiting and hand it over to the actual
   * tests
   **/
  beforeAll(async () => {
    const modulePath = path.resolve('./build/index.js');
    return new Promise((resolve, _reject) => {
      const interval = setInterval(async () => {
        const content = await firost.read(modulePath);
        if (_.startsWith(content, '"use strict"')) {
          clearInterval(interval);
          module = require(modulePath);
          resolve();
          return;
        }
      }, 1000);
    });
  });
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
    expect(module.chalk).not.toEqual(chalk);
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
