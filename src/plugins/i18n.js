import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        name: 'Alejandro Marcano',
        role: 'Data Scientist / Systems Engineer / Software Dev / Professor',
        home: 'Home',
        about: 'About',
        resume: 'Certifications',
        cv: 'Resume',
        services: 'Services',
        portfolio: 'Portfolio',
        contact: 'Contact',
        description: `  I am 23 years old, I currently live in Caracas, Venezuela I am a software
developer specialized in the area of data analysis and artificial intelligence. I
graduated as a systems engineer and currently work in a smart city company
as a data geneticist (Similar role as data scientist). Also I work as a math
professor at Universidad Metropolitana and in some projects as freelance.       
        `,
    },
    'es': {
        name: 'Alejandro Marcano',
        role: 'Científico de Datos / Ingeniero de Sistemas / Desarrollador / Profesor',
        home: 'Inicio',
        about: 'Sobre mí',
        cv: 'Curriculum',
        resume: 'Certificaciones',
        services: 'Servicios',
        portfolio: 'Portafolio',
        contact: 'Contacto',
        description: `  Tengo 23 años, actualmente vivo en Caracas, Venezuela soy un software
desarrollador especializado en el área de análisis de datos e inteligencia artificial. yo
se graduó como ingeniero de sistemas y actualmente trabaja en una empresa de ciudad inteligente
como genetista de datos (papel similar al científico de datos). También trabajo como matemático
profesor de la Universidad Metropolitana y en algunos proyectos como freelance.
        `,
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;