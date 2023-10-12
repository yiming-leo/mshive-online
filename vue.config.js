const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],
    //新增
    publicPath: process.env.NODE_ENV === 'production'
        ? '/mshive-online/'
        : '/'
})
