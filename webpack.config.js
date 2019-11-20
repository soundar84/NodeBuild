const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    app: ['./run.js']
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'run.js'
  }
};
