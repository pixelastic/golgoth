import dayjs from 'dayjs';
import got from 'got';
import pify from 'pify';
import pAll from 'p-all';
import pMap from 'p-map';
import pMapSeries from 'p-map-series';
import queryString from 'query-string';
import timeSpan from 'time-span';
import _ from './lodash.js';
import chalk from './chalk.js';

export default {
  chalk,
  dayjs,
  got,
  lodash: _,
  pAll,
  pMapSeries,
  pMap,
  pify,
  queryString,
  timeSpan,
  _,
};
