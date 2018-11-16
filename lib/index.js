import _chalk from './chalk';
import _lodash from 'lodash';
import _pAll from 'p-all';
import _pMapSeries from 'p-map-series';
import _pMap from 'p-map';
import _pify from 'pify';
import _progress from 'progress';

// import { pify } from 'golgoth';
export const chalk = _chalk;
export const lodash = _lodash;
export const pAll = _pAll;
export const pMapSeries = _pMapSeries;
export const pMap = _pMap;
export const pify = _pify;
export const progress = _progress;
export const _ = _lodash;

// import golgoth from 'golgoth';
// golgoth.pify();
export default {
  chalk,
  lodash,
  pAll,
  pMap,
  pMapSeries,
  pify,
  progress,
  _: lodash,
};
