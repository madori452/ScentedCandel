module.exports = {
  publicPath: '/Vue_shop/dist/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '\n           @import "@/assets/scss/main.scss";\n        '
      }
    }
  }
}
