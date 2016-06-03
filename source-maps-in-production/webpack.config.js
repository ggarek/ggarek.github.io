const webpack = require('webpack');

const sourceMapURL = 'http://localhost:16016/secure/source-maps/';
const sourceURL = 'http://localhost:16016/secure/source/';
const config = {
  entry: './src/index',

  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
      // Change default source map footer for the bundle (were to look for source maps)
      append: `\n//# sourceMappingURL=${sourceMapURL}[url]`,

      // This will alter how reconstructed source files will appear in the source tree in developer console
      moduleFilenameTemplate: `${sourceURL}[resource-path]`,
      fallbackModuleFilenameTemplate: `${sourceURL}[resource-path]?[hash]`,
    }),
    // minify the bundle
    new webpack.optimize.UglifyJsPlugin(),
  ],
};

module.exports = config;