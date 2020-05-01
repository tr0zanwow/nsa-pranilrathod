import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import About from '../components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'dashboard'
        },    
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
        ]
  })