import chalk from 'chalk';

/**
 * Extending chalk with custom colors. Having them in golgoth allow easier
 * re-use of them accross projects
 **/
const module = {
  ...chalk,
  black: chalk.ansi256('233'),
  blue: chalk.ansi256('69'),
  calmBlue: chalk.ansi256('67'),
  calmGreen: chalk.ansi256('108'),
  calmOrange: chalk.ansi256('209'),
  calmPurple: chalk.ansi256('141'),
  calmRed: chalk.ansi256('203'),
  calmYellow: chalk.ansi256('185'),
  darkBlue: chalk.ansi256('24'),
  darkGray: chalk.ansi256('235'),
  darkGreen: chalk.ansi256('28'),
  darkGrey: chalk.ansi256('235'),
  darkOrange: chalk.ansi256('166'),
  darkPurple: chalk.ansi256('55'),
  darkYellow: chalk.ansi256('136'),
  darkred: chalk.ansi256('88'),
  gray: chalk.ansi256('241'),
  green: chalk.ansi256('35'),
  grey: chalk.ansi256('241'),
  lightGray: chalk.ansi256('250'),
  lightGrey: chalk.ansi256('250'),
  orange: chalk.ansi256('202'),
  pureBlack: chalk.ansi256('16'),
  pureWhite: chalk.ansi256('255'),
  purple: chalk.ansi256('171'),
  red: chalk.ansi256('160'),
  white: chalk.ansi256('252'),
  yellow: chalk.ansi256('184'),
};

export default module;
