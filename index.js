/* eslint no-console: 0 */

const chalk = require('chalk');

class HelloWorld {
  constructor() { }
  apply(compiler) {
    compiler.plugin('done', () => {
      console.log(chalk.bgGreen.black.bold('\n  Hello world from Webpack Plugin  \n'));
    })
  }
}

module.exports = HelloWorld