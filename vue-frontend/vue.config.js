// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


module.exports = {
  devServer: {
    proxy: {
      '/students': {
        target: 'http://54.205.9.151:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/students': '/students',
        },
        logLevel: 'debug', // Enable logging to debug the proxy requests
      },
      '/subjects': {
        target: 'http://54.205.9.151:8000',
        changeOrigin: true,
        pathRewrite: {
          '^/subjects': '/subjects',
        },
        logLevel: 'debug', // Enable logging to debug the proxy requests
      },
    },
  },
};


/*
module.exports = {
  devServer: {
    proxy: {
      '^/subjects': {
        target: 'http://54.205.9.151:8000',
        changeOrigin: true
      },
      '^/students': {
        target: 'http://54.205.9.151:8000',
        changeOrigin: true
      }
    }
  }
}
*/
