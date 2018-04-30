// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls befloe since this is a build file.
/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../prod.webpack.config';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // this assures the babel dev config (for hot reloading)

console.log('generating minified bundle for production via Webpack. This will take a moment...');

webpack(webpackConfig).run((err, stats) => {
  if (err) {// so a fatal error occurred, stop here.
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack state: ${stats}`);

  // if we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written to /dist. it\'s ready to roll.'.green);

  return 0;
});
