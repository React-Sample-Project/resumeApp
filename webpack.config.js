var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    './src/main.js'
  ],
  debug: true,
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot','babel?presets[]=react,presets[]=es2015'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "#inline-source-map"
};
