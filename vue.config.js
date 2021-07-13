module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/openkm/kmobile/' : './',
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/openkm': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    },
    port: 8888
  }
};
