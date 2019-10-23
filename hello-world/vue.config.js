module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        // target: 'https://cnodejs.org',
        target: 'https://www.acfun.cn',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/' // 需要rewrite的,
        }
      }
    }
  }
}

