const path = require("path");

module.exports = {
  entry: "./client/src/index.js",
  output: {
    filename: "_react.js",
    path: path.resolve(__dirname, "client/static/scripts"),
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.[j]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
