var config = {
  entry: __dirname + '/app/main.js',

  output: {
        path: __dirname + '/build',//打包后的js文件存放的地方
        filename: 'bundle.js'//打包后输出的js的文件名
  },

  devServer: {
    contentBase: './build',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
    inline: true,
    port: 3333
  },

  module: {
    loaders: [ {
      test: /.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',

         query: {
            presets: ['es2015', 'react']
         }
      }]
  }

}

module.exports = config;