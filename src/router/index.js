import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import BarraMenu from '@/components/BarraMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: BarraMenu
    }
  ]
})
