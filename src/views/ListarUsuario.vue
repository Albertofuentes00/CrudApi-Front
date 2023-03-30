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
              <tr v-for="usuario in usuarios" :key="usuario.id">
                <td>{{ usuario.id }}</td>
                <td>{{ usuario.user }}</td>
                <td>{{ usuario.password }}</td>
                <td>{{ usuario.fechaRegistro }}</td>
                <td>{{ usuario.empleado.nombre }}</td>
                <td>{{ usuario.rol.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{Id:articulo.Id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarUsuario(usuario.id)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                    |<router-link :to="{path:'/editarusuario'+usuario.id}" class="btn btn-warning">
                      <i class="fa-solid fa-edit">Editar</i>
                     </router-link> &nbsp;|
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btn-group" role="label" aria-label="">
            <router-link to="/crear" class="btn btn-primary"
            >Nuevo Usuario
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
      usuarios: [],
    };
  },
  created: function () {
    this.consultarUsuarios();
  },
  methods: {
    consultarUsuarios() {
      axios.get("https://localhost:7204/Usuario/Leer").then((result) => {
        console.log(result.data.result);
        this.usuarios = result.data.result;
      });
    },

    borrarUsuario(Id) {
      console.log(Id);

      axios.delete("https://localhost:7204/Usuario/Borrar/" + Id.toString());
      this.consultarUsuarios();
      window.location.href = "Listar";
    },

    editarUsuario(Id) {
      
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