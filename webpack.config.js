const path = require('path');
const HelloWorld = require('./index.js')

const config = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, './public', 'js'),
    filename: 'bundle.js'
  },
  plugins: [
    new HelloWorld()
  ]
};

module.exports = config;