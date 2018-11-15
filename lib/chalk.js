import _chalk from 'chalk';

/**
 * Extending chalk with custom colors. Having them in golgoth allow easier
 * re-use of them accross projects
 **/
const module = {
  ..._chalk,
  black: _chalk.ansi256('233'),
  blue: _chalk.ansi256('69'),
  calmBlue: _chalk.ansi256('67'),
  calmGreen: _chalk.ansi256('108'),
  calmOrange: _chalk.ansi256('209'),
  calmPurple: _chalk.ansi256('141'),
  calmRed: _chalk.ansi256('203'),
  calmYellow: _chalk.ansi256('185'),
  darkBlue: _chalk.ansi256('24'),
  darkGray: _chalk.ansi256('235'),
  darkGreen: _chalk.ansi256('28'),
  darkGrey: _chalk.ansi256('235'),
  darkOrange: _chalk.ansi256('166'),
  darkPurple: _chalk.ansi256('55'),
  darkYellow: _chalk.ansi256('136'),
  darkred: _chalk.ansi256('88'),
  gray: _chalk.ansi256('241'),
  green: _chalk.ansi256('35'),
  grey: _chalk.ansi256('241'),
  lightGray: _chalk.ansi256('250'),
  lightGrey: _chalk.ansi256('250'),
  orange: _chalk.ansi256('202'),
  pureBlack: _chalk.ansi256('16'),
  pureWhite: _chalk.ansi256('255'),
  purple: _chalk.ansi256('171'),
  red: _chalk.ansi256('160'),
  white: _chalk.ansi256('252'),
  yellow: _chalk.ansi256('184'),
};

export default module;
