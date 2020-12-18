import Vue from 'vue'
import Router from 'vue-router'
import PxAbout from '@/components/PxAbout'
import ProjectDetail from '@/components/ProjectDetail'

//use nos permite ir escalando en requerimientos, añadir plugins
Vue.use(Router)


export default new Router({
    //esto lo que usa es el history mode de html
    mode: 'history',


    routes:[
        {
            path: '/',
            name: 'home',
            component: PxAbout
        },


        {
            path: '/project/:id',
            name: 'project-detail',
            component: ProjectDetail
        },

    ]
})