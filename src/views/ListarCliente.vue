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
                    |<button
                      type="button"
                      v-on:click="borrarCliente(cliente.iD_Cliente)"
                      class="btn btn-warning"
                    >
                      Editar</button
                    >|
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
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
      axios.get("https://localhost:7204/Cliente").then((result) => {
        console.log(result.data.result);
        this.clientes = result.data.result;
      });
    },

    borrarempleado(iD_Cliente) {
      console.log(iD_Cliente);

      axios.delete("https://localhost:7204/Cliente/Borrar/" + iD_Cliente.toString());
      this.consultarClientes();
      window.location.href = "Listar";
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