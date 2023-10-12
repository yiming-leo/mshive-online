const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: [
        'vuetify'
    ],
    //Production Mode
    publicPath: process.env.NODE_ENV === 'production'
        ? '/mshive-online/'
        : '/'
})
