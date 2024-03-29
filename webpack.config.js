// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: {
    "Character": path.resolve(__dirname, 'src/Character.ts'),
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
    devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
        {
            test: /\.ts$/,
            exclude: [/node_modules/],
            loader: 'ts-loader'
        }
    ]
  },
  resolve: {
    extensions: [".ts"],
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
