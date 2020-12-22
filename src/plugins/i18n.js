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

        //About
        sub_about: 'Learn More About Me 👇',
        description: `  I am 23 years old, I currently live in Caracas, Venezuela I am a software
        developer specialized in the area of data analysis and artificial intelligence. I
        graduated as a systems engineer and currently work in a smart city company
        as a data geneticist (Similar role as data scientist). Also I work as a math
        professor at Universidad Metropolitana and in some projects as freelance.       
        `,
        birthday: 'Birthday:',
        birthday_ans: '30 August 1997',
        website: 'Website:',
        website_ans: 'alejandromarcano.com',
        phone: 'Telegram:',
        phone_ans: '@datacampero',
        city: 'City:',
        city_ans: 'Caracas, Venezuela',
        age: 'Age:',
        age_ans: '23',
        degree: 'Degree:',
        degree_ans: 'Bachelor and Professor',

        //cards
        hobbies: 'I like as hobbies to play guitar, record covers, walks to mountains, hiking and get soccer statistics.',
        years_exp: '3',
        years_exp_text: 'Experience Years',
        works_num: '6',
        works_num_text: 'jobs in my life',
        GPA_uni: '17',
        GPA_text: 'GPA University',
        percent: '100',
        percent_text: '% Scholarship Bachelor',

        skills: 'Skills',
        interests: 'Interests',
        ai: 'Artificial Intelligence',
        bd: 'Big Data',
        web: 'Web Development',
        analysis: 'Data Analysis',
        iot: 'Internet of Things',
        mobile: 'Hybrid Mobile Apps',
        google: 'Google Cloud Platform',
        aws: 'Amazon Web Services',
        scrum: 'Srum: Agile',
        api: 'Restful API',
        linux: 'Linux',
        math: 'Math',





        //Resume
            check: 'Check My Resume 📋',
            sumary: 'Sumary',
            location: 'La Urbina, Caracas, Venezuela',
            email: 'alemvangrieken@gmail.com',
            social: '@datacampero',
            others: 'Other platforms',
            
            
            //Education
            education: 'Education',
            career: 'Systems Engineering',
            year_career: 'Sep 2015 -Dec 2019',
            Institute: 'Universidad Metropolitana, Caracas, Venezuela',
            education_point1: 'GPA: 17.28/20',
            education_point2: '100 % Scholarship for Good Grades',
            education_point3:`Thesis about "facial recognition using convolutional
                                neural networks" with Honorable mention.`,
            education_point4: `First position of systems engineering graduation promotion.`,
            
            //Profesor Experience
            professor: 'Profesor Experience',
            subject1: 'Mathematics 1',
            year_subject1: 'Sep 2020 -Present',
            Institute1: 'Universidad Metropolitana, Caracas, Venezuela',
            subject1_point1: `Teach 4 hours of classes per week of the subject Mathematics 1, which
                            corresponds to the first on differential calculus (online due to the
                            pandemic)`,
            subject1_point2: 'Design the subject evaluations.',
            subject1_point3: `Create digital content (blogs, videos, notions, guides) to I teach better.`,
            
            subject2: ' Programing and Algorithmics',
            year_subject2: 'Jan 2020 -Present',
            Institute2: 'Universidad Metropolitana, Caracas, Venezuela',
            subject2_point1: `Teach in a virtual way through different platforms (Google Classroom, meet, programming videos) the introductory subject to programming at the Metropolitan University`,

            //Professional Experience
            professional: 'Professional Experience',
            role1: 'Data Geneticist / Data Scientist',
            year_role1: 'Jun 2019 -Present',
            Company1: 'Vikua in Caracas',
            role1_point1: `Creation of predictive models for the area of public transport.`,
            role1_point2: 'Dashboard creation: data visualization with python.',
            role1_point3: `Design simple web apps to show the machine learning models.`,
            
            role2: 'Python Course Creator',
            year_role2: 'Jun 2020 -Present',
            Company2: 'CultureLab, Freelance/Remote in Madrid',
            role2_point1: `Freelance work for the development of videos, contents, for a data analysis
            course with python. `,
            role2_point2: 'Create the evaltions of the course.',
            role2_point3: `Answer the student questions.`,
            

            role3: 'Data Entry',
            year_role3: 'May 2019 - Dec 2019',
            Company3: 'Yieldify, Remote in London',
            role3_point1: `Url data entry from similar sites. `,
            role3_point2: 'Update leads in the Salesforce database every day.',
            
        
            role4: 'Intern BI',
            year_role4: 'Jan 2019 - Mar 2019',
            Company4: 'Cervecería Reginal in Caracas',
            role4_point1: `Automate file upload process on store audit studio using SQL Server. `,
            role4_point2: 'Data Visualization with Tableau Software.',
            role4_point3: `Queries in SQL Server.`,
            
            role5: `Teacher Assitant of subjects:Mathematics 1, Mathematics 4, DB
            Administrator, Physical 3 `,
            year_role5: 'Sep 2017 - Jan 2019',
            Company5: 'Universidad Metropolitana in Caracas',
            role5_point1: `Solve practical math exercises with students every Friday.`,
            role5_point2: 'Apply tests evaluated to students.',
            role5_point3: `Clarify the existing doubts of the students on the subject.`,


            //Courses
            courses: 'Courses',
            my_courses: 'See my courses 📜',


            //Portfolio
            my_works: 'My Works 💻',

            //Servicios 
        my_services: 'My Services 🛠️',
        data : 'Data Analysis',
        data_def: `I clean datasets, dashboards 
            with visualizations in tableau, powerBI and I use python for modeling`,
        mobile_2: 'Mobile App Development',
        mobile_def: `I have used flutter and ionic to perform hybrid development
         on ios and android devices`,
        class: 'Particular Professor',
        class_def: `As a professor I give private classes in mathematics, 
        calculus, linear algebra, logic, simulation and others.`,
        web_dev: 'Web Dev',
        web_dev_def: 'I have experience with Angular and Vue in web app development',
        ai_2: 'AI (Artificial Intelligence)',
        ai_def: 'I perform deep learning applications with CNN, NLP with RNN',
        backend: 'Backend',
        backend_def: 'I have skills with Flask and Django to create a Rest API for your app',

        
    




            //Contact
        contact_me: 'Contact Me 📬',
        my_adress: 'My Address',
        email_me: 'Email me',
        social_networks: 'Social Networks',
        text_me: 'Telegram',
        your_name: 'Your Name',
        your_email: 'Your Email',
        subject: 'Subject',
        your_message: 'Message',
        send_message: 'Send Email to Alejandro',
        

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

        //Sobre mi
        sub_about: 'Lee más sobre mí 👇',

        description: `  Tengo 23 años, actualmente vivo en Caracas, Venezuela soy un software
        desarrollador especializado en el área de análisis de datos e inteligencia artificial.
        Me gradué como ingeniero de sistemas y actualmente trabajo en una empresa de ciudad inteligente
        como genetista de datos (rol similar al científico de datos). También trabajo como 
        profesor universitario de la Universidad Metropolitana y en algunos proyectos como freelance.
        `,
        birthday: 'Cumpleaños:',
        birthday_ans: '30 Agosto de 1997',
        website: 'Página web:',
        website_ans: 'alejandromarcano.com',
        phone: 'Telegram:',
        phone_ans: '@datacampero',
        city: 'Ciudad:',
        city_ans: 'Caracas, Venezuela',
        age: 'Edad:',
        age_ans: '23',
        degree: 'Grado:',
        degree_ans: 'Ingeniero y Profesor Universitario',

        //cards
        hobbies: 'I like as hobbies to play guitar, record covers, walks to mountains, hiking and get soccer statistics.',
        years_exp: '3',
        years_exp_text: 'Años de Experiencia ',
        works_num: '6',
        works_num_text: 'Trabajos en mi vida',
        GPA_uni: '17',
        GPA_text: 'Índice Académico',
        percent: '100',
        percent_text: '% Beca Académica Pregrado',

        skills: 'Habilidades',
        interests: 'Intereses',
        ai: 'Inteligencia Artificial',
        bd: 'Big Data',
        web: 'Desarrollo Web',
        analysis: 'Análisis de Datos',
        iot: 'Internet de las Cosas',
        mobile: 'Apps Móviles Híbridas',
        google: 'Google Cloud Platform',
        aws: 'Amazon Web Services',
        scrum: 'Srum: Metodología Ágil',
        api: 'Restful API',
        linux: 'Linux',
        math: 'Matemática',




        
        //Curriculum
            
            check: 'Revisa mi Curriculum 📋',
            sumary: 'Resumen',
            location: 'La Urbina, Caracas, Venezuela',
            email: 'alemvangrieken@gmail.com',
            social: '@datacampero',
            
            
            //Educación
            education: 'Educación',
            career: 'Ingeniero de Sistemas',
            year_career: 'Sep 2015 -Dic 2019',
            Institute: 'Universidad Metropolitana, Caracas, Venezuela',
            education_point1: 'índice académico: 17.28/20',
            education_point2: 'Beca de Excelencia que cubría 100 % de la matrícula ',
            education_point3: `Tesis sobre "Reconocimiento Facial usando
                                Redes Neuronales Convolucionales" con Mención Honorífica.`,
            education_point4: `Primera Posición en la promoción de Ingeniería de Sistemas.`,
            
            //Experiencia de Profesor
            professor: 'Profesor Universitario',
            subject1: 'Matemáticas 1',
            year_subject1: 'Sep 2020 -Present',
            Institute1: 'Universidad Metropolitana, Caracas, Venezuela',
            subject1_point1: `Dictar 4 horas de clases a la semana de la asignatura Matemáticas 1,
                            que corresponde la primera materia sobre cálculo diferencial (de manera
                                virtual durante la pandemia)`,
            subject1_point2: 'Diseñar las evaluaciones de la materia.',
            subject1_point3: `Crear contenido digital (blogs, videos, guías ) como material de estudio.`,
            
            subject2: 'Algoritmos y Programación',
            year_subject2: 'Ene 2020 -Present',
            Institute2: 'Universidad Metropolitana, Caracas, Venezuela',
        subject2_point1: `Enseñar de manera virtual a través de diferentes plataformas (Google Classroom, meet, Videos de Youtube).
                            Esta materia es la primera en el pensum sobre programación en la Carrera de Ingeniería de Sistemas`,

            //Experiencia Profesional
            professional: 'Experiencia Profesional',
            role1: 'Genetista de Datos / Científico de Datos',
            year_role1: 'Jun 2019 -Present',
            Company1: 'Vikua en Caracas',
            role1_point1: `Creación de modelos predictivos para el área de transporte público.`,
        role1_point2: `Creación de Dashboard con herramientas de Visualización de python (Dash, plotly, Bokeh)
                        y Tableau.`,
            role1_point3: `Diseñar aplicaciones web simples para mostrar los modelos de machine learning.`,
            
            role2: 'Creador de Contenido Curso de Python',
            year_role2: 'Jun 2020 -Present',
            Company2: 'CultureLab, Freelance/Remoto en Madrid',
        role2_point1: `Creación de videos, sumando en total más de 18 horas de contenido sobre
            análisis de datos con python. `,
            role2_point2: 'Crear las diferentes evaluaciones del curso.',
            role2_point3: `Aclarar las preguntas de los estudiantes.`,
            

            role3: 'Data Entry',
            year_role3: 'May 2019 - Dic 2019',
            Company3: 'Yieldify, Remoto en Londrés',
            role3_point1: `Realizar Data Entry de datasets en excel `,
            role3_point2: 'Actualizar leads en la base de datos de Salesforce semanalmente.',
            
        
            role4: 'Pasante de BI',
            year_role4: 'Ene 2019 - Mar 2019',
            Company4: 'Cervecería Reginal in Caracas',
            role4_point1: `Automatizar el proceso de auditoría de tiendas usando SQL Server. `,
            role4_point2: 'Visualización de Datos con Tableau Software.',
            role4_point3: `Queries en SQL Server.`,
            
            role5: `Preparardor de las asignaturas:Matemáticas 1, Matemáticas 4, Administrador de BD
            Administrator, Física 3 `,
            year_role5: 'Sep 2017 - Ene 2019',
            Company5: 'Universidad Metropolitana en Caracas',
            role5_point1: `Resolver ejercicios prácticos con los estudiantes cada viernes.`,
            role5_point2: 'Aplicar quices a los estudiantes y corregirlos.',
            role5_point3: `Aclarar las dudas existentes a los estudiantes sobre la materia.`,
            
            //Courses
            courses: 'Cetificaciones',
        my_courses: 'Ve Mis Cursos 📜',
            others: 'Otras Plataformas',


            //Portfolio
        my_works: 'Mis proyectos 💻',
            
            //Servicios 
        my_services: 'Mis Servicios 🛠️',
        data : 'Análisis de Datos',
        data_def: `Me encargo de la limpieza de datasets, preprocesamineto de datos,
        para su posterior visualización en dashboards en Tableau, PowerBI y modelos en python`,
        mobile_2: 'Desarrollo móvil',
        mobile_def: `He utilizado Flutter y Ionic para hacer aplicaciones móviles Híbridas
        que permiten que funcionen tanto en dispositivos Android como IOS`,
        class: 'Profesor Particular',
        class_def: `Con mi experiencia de preparador y profesor, doy clases particulares
        de materias científicas como cálculo, álgebra lineal, simulación, entre otras.`,
        web_dev: 'Desarrollo Web',
        web_dev_def: 'Realizo aplicaciones  con los frameworks Angular y Vue',
        ai_2: 'IA (Inteligencia Artificial)',
        ai_def: 'Realizo aplicaciones de aprendizaje profundo usando redes neuronales CNN y RNN',
        backend: 'Backend',
        backend_def: 'Desarrollo API REST con los frameworks Flask, Django y Express de Node.js ',

       //Contacto
        contact_me: 'Contáctame 📬',
        my_adress: 'Mi Dirección',
        email_me: 'Correo',
        social_networks: 'Redes Sociales',
        text_me: 'Escríbeme',
        your_name: 'Tu Nombre',
        your_email: 'Tu Correo',
        subject: 'Asunto',
        your_message: 'Mensaje',
        send_message: 'Enviar correo a Alejandro',
                            
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;