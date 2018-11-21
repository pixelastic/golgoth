import ora from 'ora';
import chalk from 'chalk';

/**
 * Returns a spinner to display progress of any task
 * @param {Number} total Max number of items to execute
 * @returns {Object} Spinner object, coming with two methods:
 *  .tick(text) Increment the spinner by one and display the text
 *  .succeed(text) Stop the spinner and display a success message
 **/
export default function(total) {
  const spinner = ora();
  spinner.max = total;
  spinner.current = 0;
  spinner.start();

  return {
    tick(userText) {
      const current = ++spinner.current;
      const max = spinner.max;
      const displayText = `[${current}/${max}] ${userText}`;
      spinner.text = displayText;
    },
    succeed(userText) {
      spinner.succeed(
        `[${spinner.current}/${spinner.max}] ${chalk.green(userText)}`
      );
    },
    fail(userText) {
      spinner.fail(
        `[${spinner.current}/${spinner.max}] ${chalk.red(userText)}`
      );
    },
  };
}
