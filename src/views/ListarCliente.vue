<template>
    <div>
      <div class="card">
        <div class="card-header">Clientes</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Direccion</th>

              </tr>
            </thead>
            <tbody>
              <tr v-for="cliente in clientes" :key="cliente.iD_Cliente">
                <td>{{ cliente.iD_Cliente }}</td>
                <td>{{ cliente.nombre }}</td>
                <td>{{ cliente.apellidos }}</td>
                <td>{{ cliente.telefono }}</td>
                <td>{{ cliente.email }}</td>
                <td>{{ cliente.direccion }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{Id:articulo.Id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarCliente(cliente.iD_Cliente)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                      <router-link :to="{path:'/editarcliente/'+cliente.iD_Cliente}" class="btn btn-warning">
                      <i class="fa-solid fa-edit">Editar</i>
                     </router-link> &nbsp;
                    |
                    
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btn-group" role="label" aria-label="">
            <router-link to="/crearcliente" class="btn btn-primary"
            >Nuevo cliente
            </router-link> &nbsp;|
            <router-link to="/dashboard" class="btn btn-secondary"
            >Regresar
            </router-link>
      </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      clientes: [],
    };
  },
  created: function () {
    this.consultarClientes();
  },
  methods: {
    consultarClientes() {
      axios.get("https://localhost:7204/Cliente/Leer").then((result) => {
        console.log(result.data.result);
        this.clientes = result.data.result;
      });
    },

    borrarCliente(iD_Cliente) {
      console.log(iD_Cliente);

      axios.delete("https://localhost:7204/Cliente/Borrar/" + iD_Cliente);
      this.consultarClientes();
      window.location.href = "listarcliente";
    },

    editarCliente(iD_Cliente) {
      
    }
  },
};
</script>

<style>

  .card-style{
    color: black;
  }

  .thead{
    font-size: 20px;
  }


</style>