module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ScentedCandel/' : '/',

  css: {
    loaderOptions: {
      sass: {
        prependData: '\n           @import "@/assets/scss/main.scss";\n        '
      }
    }
  }
}
