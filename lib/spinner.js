import ora from 'ora';
import chalk from 'chalk';

/**
 * Returns a spinner to display progress of any task
 * @param {number} total Max number of items to execute
 * @returns {object} Spinner object, coming with two methods:
 *  .tick(text) Increment the spinner by one and display the text
 *  .succeed(text) Stop the spinner and display a success message
 **/
export default function(total) {
  const spinner = ora();
  spinner.current = 0;
  spinner.max = total;
  spinner.start();

  return {
    spinner,
    /**
     * Format the text of the spinner to include the current step, the max
     * number of step and a custom message
     * @param {string} userText The text to display
     * @returns {string} The full message string
     **/
    text(userText) {
      return `[${this.spinner.current}/${this.spinner.max}] ${userText}`;
    },
    /**
     * Increment the spinner by one, and also update the text if provided
     * @param {string} userText The text to display
     * @returns {void}
     **/
    tick(userText) {
      this.spinner.current++;
      this.spinner.text = this.text(userText);
    },
    /**
     * Succeed the internal spinner and display a green message.
     * @param {string} userText The text to display
     * @returns {void}
     **/
    succeed(userText) {
      this.spinner.succeed(this.text(chalk.green(userText)));
    },
    /**
     * Succeed the internal spinner and display a red message.
     * @param {string} userText The text to display
     * @returns {void}
     **/
    fail(userText) {
      this.spinner.fail(this.text(chalk.red(userText)));
    },
  };
}
