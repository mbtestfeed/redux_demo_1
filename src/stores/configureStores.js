if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configureStores.prod.js');
} else {
  module.exports = require('./configureStores.dev.js');
}
