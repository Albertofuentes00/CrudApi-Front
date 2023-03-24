<template>
    <div>
      <div class="card">
        <div class="card-header">USUARIOS</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Password</th>
                <th>FechaRegistro</th>
                <th>ID Empleado</th>
                <th>ID Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario in usuario" :key="usuario.Id">
                <td>{{ usuario.Id }}</td>
                <td>{{ usuario.user }}</td>
                <td>{{ usuario.password }}</td>
                <td>{{ usuario.fechaRegistro }}</td>
                <td>{{ usuario.idEmpleado }}</td>
                <td>{{ usuario.idRol }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{Id:articulo.Id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarUsuario(usuario.Id)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                    |<button
                      type="button"
                      v-on:click="borrarUsuario(usuario.Id)"
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
      usuario: [],
    };
  },
  created: function () {
    this.consultarUsuarios();
  },
  methods: {
    consultarUsuarios() {
      axios.get("https://localhost:7204/Usuario").then((result) => {
        console.log(result.data.result);
        this.usuario = result.data.result;
      });
    },

    borrarArticulo(Id) {
      console.log(Id);

      axios.delete("https://localhost:7204/Usuario/Borrar/" + Id);

      window.location.href = "Listar";
    },
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