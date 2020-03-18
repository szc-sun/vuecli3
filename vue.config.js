// var path = require('path')
module.exports = {
  outputDir: 'dist',
  publicPath: './',
  devServer: {
    // 设置主机地址
    host: 'localhost',
    // 设置默认端口
    // port: '8080',
    // 打开浏览器
    open: true,
    port: 9000
    // 设置代理
    // proxy: {
    //   '/api': { // 命名
    //     target: 'http://203.207.224.108:2050', // 转发地址
    //     changeOrigin: true, // 允许跨域
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   },
    //   '/api2': { // 命名
    //     target: 'http://203.207.224.103:18180', // 转发地址
    //     changeOrigin: true, // 允许跨域
    //     pathRewrite: {
    //       '^/api2': ''
    //     }
    //   }
    // }

    // proxy: {
    // // 百度搜索
    // '/fuzzy/': {
    //   target: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/',
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/fuzzy/': ''
    //   }
    // },
    // // 百度天气接口http://apistore.baidu.com/microservice/weather?cityid=
    // // 获取城市编码接口:"http://apistore.baidu.com/microservice/cityinfo?cityname= (不一定能用)
    // //  http://apistore.baidu.com/microservice/weather?citypinyin=(能用)
    // '/weather/': {
    //   target: 'http://apistore.baidu.com/microservice',
    //   changeOrigin: true,
    //   pathRewrite: {
    //     '^/weather/': '/'
    //   }
    // }
    // }

    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8081',
    //     pathRewrite: {
    //       '^/api': '/mock'
    //     }
    //   }
    // }
  },
  configureWebpack: {
    resolve: { extensions: ['.ts', '.tsx', '.js', '.json'] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/]
          }
        }
      ]
    }
  }
}
