module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'https://todoapp.pharmacopedia.store',
          changeOrigin: true
        },
      }
    }
  }