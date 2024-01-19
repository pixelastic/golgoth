import dayjs from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';
import isSameOrBeforePlugin from 'dayjs/plugin/isSameOrBefore.js';
import isSameOrAfterPlugin from 'dayjs/plugin/isSameOrAfter.js';

dayjs.extend(utcPlugin);
dayjs.extend(isSameOrBeforePlugin);
dayjs.extend(isSameOrAfterPlugin);
export default dayjs;
