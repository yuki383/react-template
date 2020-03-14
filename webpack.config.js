const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /.(png|jpe?g|gif)$/i,
        use: [{ loader: "file-loader", }]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      images: path.resolve(__dirname, "public/images")
    }
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devtool: "eval-source-map"
};
