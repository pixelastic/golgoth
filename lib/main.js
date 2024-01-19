// Raw dependencies
import chalk from 'chalk';
import dedent from 'dedent';
import got from 'got';
import pAll from 'p-all';
import pMapSeries from 'p-map-series';
import pMap from 'p-map';
import pProps from 'p-props';
import pify from 'pify';
import queryString from 'query-string';
import timeSpan from 'time-span';

// Extended dependencies
import dayjs from './dayjs.js';
import lodash from './lodash.js';

// Named exports (preferred way)
// Usage: import { chalk, got } from 'golgoth';
export { chalk as chalk };
export { dayjs as dayjs };
export { dedent as dedent };
export { got as got };
export { lodash as lodash };
export { lodash as _ };
export { pAll as pAll };
export { pMapSeries as pMapSeries };
export { pMap as pMap };
export { pProps as pProps };
export { pify as pify };
export { queryString as queryString };
export { timeSpan as timeSpan };

// Default export (god object)
// Usage: import golgoth from 'golgoth';
export default {
  chalk,
  dayjs,
  dedent,
  got,
  lodash,
  pAll,
  pMapSeries,
  pMap,
  pProps,
  pify,
  queryString,
  timeSpan,
  _: lodash,
};
