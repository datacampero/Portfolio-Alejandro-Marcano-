import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        name: 'Alejandro Marcano',
        role: 'Data Scientist / Systems Engineer / Software Dev / Professor',
        home: 'Home',
        about: 'About',
        resume: 'Resume',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact'
    },
    'es': {
        name: 'Alejandro Marcano',
        role: 'Científico de Datos / Ingeniero de Sistemas / Desarrollador / Profesor',
        home: 'Inicio',
        about: 'Sobre',
        resume: 'Curriculum',
        services: 'Servicios',
        portfolio: 'Portafolio',
        contact: 'Contacto'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;