import dayjs from 'dayjs';
import isSameOrAfterPlugin from 'dayjs/plugin/isSameOrAfter.js';
import isSameOrBeforePlugin from 'dayjs/plugin/isSameOrBefore.js';
import utcPlugin from 'dayjs/plugin/utc.js';

dayjs.extend(utcPlugin);
dayjs.extend(isSameOrBeforePlugin);
dayjs.extend(isSameOrAfterPlugin);
export default dayjs;
