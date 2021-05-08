const webpack = require('webpack')
module.exports = {
  mode: 'development',
  devServer: {
    host: 'localhost',
    hot: true,
    port: 3000,
    open: true,
  },
  output: {
    publicPath: 'http://localhost:3000/',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('dev'),
    }),
  ],
}
