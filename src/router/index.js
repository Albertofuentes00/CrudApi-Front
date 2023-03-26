import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Dashboard from '../views/DashboardView.vue'
import CrearUsuario from "../views/CrearUsuario.vue"
import ListarUsuario from '../views/ListarUsuario.vue'
import CrearDepartamento from '../views/CrearDepartamento.vue'
import ListarDepartamento from '../views/ListarDepartamento.vue'
import CrearEmpleado from '../views/CrearEmpleado.vue'
import ListarEmpleado from '../views/ListarEmpleado.vue'
import CrearPuesto from '../views/CrearPuesto.vue'
import ListarPuesto from '../views/ListarPuesto.vue'
import CrearRol from '../views/CrearRol.vue'
import ListarRol from '../views/ListarRol.vue'
import CrearFactura from '../views/CrearFactura.vue'
import ListarFactura from '../views/ListarFactura.vue'
import CrearCliente from '../views/CrearCliente.vue'
import ListarCliente from '../views/ListarCliente.vue'


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
      name: 'crear',
      component: CrearUsuario
    },
    {
      path: '/listar',
      name: 'listar',
      component: ListarUsuario
    },
    {
      path: '/creardepartment',
      name: 'creardepartment',
      component: CrearDepartamento
    },
    {
      path: '/listardepartment',
      name: 'listardepartment',
      component: ListarDepartamento
    },
    {
      path: '/crearempleado',
      name: 'crearempleado',
      component: CrearEmpleado
    },
    {
      path: '/listarempleado',
      name: 'listarempleado',
      component: ListarEmpleado
    },
    {
      path: '/crearpuesto',
      name: 'crearpuesto',
      component: CrearPuesto
    },
    {
      path: '/listarpuesto',
      name: 'listarpuesto',
      component: ListarPuesto
    },
    {
      path: '/crearRol',
      name: 'crearRol',
      component: CrearRol
    },
    {
      path: '/listarRol',
      name: 'listarRol',
      component: ListarRol
    },
    {
      path: '/crearfactura',
      name: 'crearfactura',
      component: CrearFactura
    },
    {
      path: '/listarfactura',
      name: 'listarfactura',
      component: ListarFactura
    },
    {
      path: '/crearcliente',
      name: 'crearcliente',
      component: CrearCliente
    },
    {
      path: '/listarcliente',
      name: 'listarcliente',
      component: ListarCliente
    }
  ]
})

export default router
