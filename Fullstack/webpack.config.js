// web pack for hot reload but this did't work properly
/* const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  mode: 'none',
}; */

// browser sync for hot reload
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8082,
      proxy: 'http://localhost:8083/',
      files: ['**/*.ejs', '**/*.css', '**/*.js']
    })
  ]
};

/* const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] }
    })
  ]
};
 */