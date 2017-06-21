module.exports = {
  entry: ['/home/edmundo/Dropbox/01-Dev/01-js/01-ES6-Env/app/index.js'],
  output: {
    path: '/home/edmundo/Dropbox/01-Dev/01-js/01-ES6-Env/build',
    filename: 'bundle.js'
  },
  module: {
    loaders:[
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: '/home/edmundo/Dropbox/01-Dev/01-js/01-ES6-Env/build',
    inline: true
  }
}
