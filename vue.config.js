const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    login: {
      entry: 'src/pages/login/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    },
    homepage: {
      entry: 'src/pages/homepage/main.js',
      template: 'public/homepage.html',
      filename: 'home.html'
    },
    productchange:{
      entry: 'src/pages/productchange/main.js',
      template: 'public/productchange.html',
      filename: 'productchange.html'
    },
    productadd:{
      entry: 'src/pages/productadd/main.js',
      template: 'public/productadd.html',
      filename: 'productadd.html'
    }
  }
})
