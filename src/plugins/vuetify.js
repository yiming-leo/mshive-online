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

                red: '#F44336',
                pink: '#E91E63',
                purple: '#9C27B0',
                deep_purple: '#673AB7',
                indigo: '#3F51B5',
                blue: '#2196F3',
                light_blue: '#03A9F4',
                cyan: '#00BCD4',
                teal: '#009688',
                green: '#4CAF50',
                light_green: '#8BC34A',
                lime: '#CDDC39',
                yellow: '#FFEB3B',
                amber: '#FFC107',
                orange: '#FF9800',
                deep_orange: '#FF5722',
                brown: '#795548',
                blue_grey: '#607D8B',
                grey: '#9E9E9E',
            },
        },
    },
    icons: {
        iconfont: 'mdi',
    },
    lang: {},
});
