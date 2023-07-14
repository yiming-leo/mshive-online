import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import "flag-icons/css/flag-icons.min.css"

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                error: '#FF5252',
                active: '#ef4a6b',
                warning: '#FFC107',
                success: '#4CAF50',
                vue_theme: '#42b883',
                primary: '#007BFF',
                info: '#2196F3',
                accent: '#82B1FF',
                secondary: '#424242',
                white: '#ffffff',
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
    lang: {},
});
