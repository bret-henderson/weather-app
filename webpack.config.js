const path = require('path');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:9000/dist/',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 9000,
    // open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  optimization: {
    // runtimeChunk: 'single',
  },
};
