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
  spinner.current = 0;
  spinner.max = total;
  spinner.start();

  return {
    spinner,
    /**
     * Format the text of the spinner to include the current step, the max
     * number of step and a custom message
     * @param {String} userText The text to display
     * @returns {String} The full message string
     **/
    text(userText) {
      return `[${this.spinner.current}/${this.spinner.max}] ${userText}`;
    },
    /**
     * Increment the spinner by one, and also update the text if provided
     * @param {String} userText The text to display
     * @returns {Void}
     **/
    tick(userText) {
      this.spinner.current++;
      this.spinner.text = this.text(userText);
    },
    /**
     * Succeed the internal spinner and display a green message.
     * @param {String} userText The text to display
     * @returns {Void}
     **/
    succeed(userText) {
      this.spinner.succeed(this.text(chalk.green(userText)));
    },
    /**
     * Succeed the internal spinner and display a red message.
     * @param {String} userText The text to display
     * @returns {Void}
     **/
    fail(userText) {
      this.spinner.fail(this.text(chalk.red(userText)));
    },
  };
}
