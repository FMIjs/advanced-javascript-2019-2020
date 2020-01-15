const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    // about: './src/about.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"), // Output compiled files into dist directory
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js'] // Automatically resolve this extensions
  },
  mode: 'development',
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.js?$/, // For all jsx files ...
        exclude: /node_modules/, // excluding the ones inside node_modules ...
        include: [
          path.resolve(__dirname, 'src') // and including all inside the src directory ...
        ],
        use: {
          loader: "babel-loader", // use the bable loader ...
          options: {
            presets: [ // that will ...
              "@babel/preset-env" // and use the latest JavaScript ...
            ],
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }], // also unclude the class properties future JavaScript
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        },
      },
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'vendor'
    }
  },
  plugins: [
    new HtmlWebPackPlugin({ // use the html plugin when building the application to 
      template: "./index.html", // use the index html file (located in the main folder)
      filename: "index.html", // and outout another index html insude the dev folder with the bundles generated form webpack included,
      // files: {
      //   js: ['./',]
      // }
    })
  ]
}