module.exports = {
  entry: "./app/assets/scripts/app.js",
  output: {
    path: "./app/postcss/scripts",
    filename: "app.js"
  },
  modules: {
    loaders: [
      {
        loader: 'babel',
        query: {
          pressets: ['es2015']
        },
        test: /\.js&/,
        exclude: /node_modules/
      }
    ]
  }
}
