import firost from 'firost';
import _ from 'lodash';

(async function() {
  // First, we build the files for the main import
  await firost.shell('aberlaas build');

  // Now we build a file with the named imports
  const golgoth = require('../build/golgoth').default;
  const content = [
    "import golgoth from './golgoth'",
    'export default golgoth;',
  ];

  _.each(_.keys(golgoth), exportName => {
    content.push(`export const ${exportName} = golgoth.${exportName};`);
  });

  await firost.write(content.join('\n'), './build/tmp.js');

  await firost.shell('babel ./build/tmp.js --out-file ./build/index.js');
  await firost.remove('./build/tmp.js');
})();
