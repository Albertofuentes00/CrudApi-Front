import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/LoginView.vue'
import Dashboard from '../views/DashboardView.vue'

import CrearUsuario from "../views/CrearUsuario.vue"
import ListarUsuario from '../views/ListarUsuario.vue'
import EditarUsuario from '../views/EditarUsuario.vue'

import CrearDepartamento from '../views/CrearDepartamento.vue'
import ListarDepartamento from '../views/ListarDepartamento.vue'
import EditarDepartamento from '../views/EditarDepartamento.vue'

import CrearEmpleado from '../views/CrearEmpleado.vue'
import ListarEmpleado from '../views/ListarEmpleado.vue'
import EditarEmpleado from '../views/EditarEmpleado.vue'

import CrearPuesto from '../views/CrearPuesto.vue'
import ListarPuesto from '../views/ListarPuesto.vue'
import EditarPuesto from '../views/EditarPuesto.vue'

import CrearRol from '../views/CrearRol.vue'
import ListarRol from '../views/ListarRol.vue'
import EditarRol from '../views/EditarRol.vue'

import CrearFactura from '../views/CrearFactura.vue'
import ListarFactura from '../views/ListarFactura.vue'
import EditarFactura from '../views/EditarFactura.vue'

import CrearCliente from '../views/CrearCliente.vue'
import ListarCliente from '../views/ListarCliente.vue'
import EditarCliente from '../views/EditarCliente.vue'

import prueba from '../views/prueba.vue'

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
      path: '/editarusuario:id',
      name: 'editarusuario',
      component: EditarUsuario
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
      path: '/editardepartment/:id',
      name: 'editardepartment',
      component: EditarDepartamento
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
      path: '/editarempleado:id',
      name: 'editarempleado',
      component: EditarEmpleado
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
      path: '/editarpuesto/:id',
      name: 'editarpuesto',
      component: EditarPuesto
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
      path: '/editarRol/:id',
      name: 'editarRol',
      component: EditarRol
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
      path: '/editarfactura:id',
      name: 'editarfactura',
      component: EditarFactura
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
    },
    {
      path:'/editarcliente/:id',
      name: 'editarcliente',
      component: EditarCliente
    },
    {
      path: '/pureba',
      name: 'prueba',
      component: prueba
    }
  ]
})

export default router
