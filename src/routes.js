import Vue from  'vue'
import VueRouter from 'vue-router'

import formulario from './components/formulario.vue'
import VistaUsuarios from './components/VistaUsuarios.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect:'/formulario'},
        {path: '/formulario', component: formulario},
        {path: '/vistaUsuario', component: VistaUsuarios},
    ]
    

})
