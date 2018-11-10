import _chalk from 'chalk';
import _lodash from 'lodash';
import _pAll from 'p-all';
import _pMap from 'p-map';
import _pify from 'pify';

// import { pify } from 'golgoth';
export const chalk = _chalk;
export const lodash = _lodash;
export const pAll = _pAll;
export const pMap = _pMap;
export const pify = _pify;
export const _ = _lodash;

// import golgoth from 'golgoth';
// golgoth.pify();
export default {
  chalk,
  lodash,
  pAll,
  pMap,
  pify,
  _: lodash,
};
