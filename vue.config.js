const path = require('path')
module.exports = {
  publicPath: '/',
  filenameHashing: true,
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Vuestic Admin',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'src': path.resolve('src'),
        'assets': path.resolve('src/assets'),
        'components': path.resolve('src/components'),
        'services': path.resolve('src/services'),
        'directives': path.resolve('src/directives'),
        'vuestic-mixins': path.resolve('src/vuestic-theme/vuestic-mixins'),
        'vuestic-components': path.resolve('src/vuestic-theme/vuestic-components'),
        'vuestic-directives': path.resolve('src/vuestic-theme/vuestic-directives'),
        'vuestic-theme': path.resolve('src/vuestic-theme'),
        'data': path.resolve('src/data'),
        'vuex-store': path.resolve('src/store')
      }
    },
  },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        data: `@import "@/sass/shared.scss";`
      }
    }
  }
}
