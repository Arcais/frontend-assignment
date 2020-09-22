const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ENV = process.env.npm_lifecycle_event;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            "presets": ["@babel/preset-env"],
            "plugins": [
              ["transform-react-jsx", { "pragma": "h" }]
            ]
          }         
        }
      }
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};