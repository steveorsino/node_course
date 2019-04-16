const path = require('path');

console.log('PATH = ', path.dirname(process.mainModule.filename));

module.exports = path.dirname(process.mainModule.filename);