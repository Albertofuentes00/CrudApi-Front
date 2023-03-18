import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Dashboard from '../views/DashboardView.vue'
import crear_user from "../views/CrearUsuario.vue"
import ListarUsuario from '../views/ListarUsuario.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/crear',
      name: 'Crear',
      component: crear_user
    },
    {
      path: '/listar',
      name: 'Listar',
      component: ListarUsuario
    }
  ]
})

export default router
