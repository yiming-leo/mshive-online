const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  //新增
  publicPath: 'https://github.com/Hooorus/mshive-online',//github仓库名
  assetsDir: 'https://github.com/Hooorus/mshive-online',//同上，否则访问不到静态资源
})
