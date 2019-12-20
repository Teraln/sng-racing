import Vue from 'vue';
import Vuetify from 'vuetify/lib';

const vuetify = new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#96CE11',
        accent: '#FFFFFF',
        secondary: '#000000',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#E40000',
        background: '#fff'
      }
    },
  }
})

Vue.use(Vuetify);

export default vuetify
