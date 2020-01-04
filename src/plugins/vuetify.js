import Vue from 'vue';
import Vuetify from 'vuetify/lib';

const vuetify = new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#96CE11',
        secondary: '#000000',
        accent: '#FFFFFF',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#E40000',
        background: '#232323'
      }
    },
  }
})

Vue.use(Vuetify);

export default vuetify
