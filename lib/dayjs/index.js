const dayjs = require('dayjs');
dayjs.extend(require('./plugin/utc'));
dayjs.extend(require('./plugin/isSameOrBefore'));
dayjs.extend(require('./plugin/isSameOrAfter'));
module.exports = dayjs;
