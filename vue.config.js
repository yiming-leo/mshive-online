const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  //新增
  publicPath: 'mshive-online',//github仓库名
  assetsDir: 'mshive-online',//同上，否则访问不到静态资源
  outputDir:"dist",
})
