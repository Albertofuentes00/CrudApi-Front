<template>
    <div>
      <div class="card">
        <div class="card-header">Roles</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rol in roles" :key="rol.iD_Rol">
                <td>{{ rol.iD_Rol }}</td>
                <td>{{ rol.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{Id:articulo.Id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarRol(rol.iD_Rol)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                    <router-link :to="{path:'/editarRol/'+rol.iD_Rol}" class="btn btn-warning">
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
            <router-link to="/crearRol" class="btn btn-primary"
            >Nuevo rol
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
      roles: [],
    };
  },
  created: function () {
    this.consultarRoles();
  },
  methods: {
    consultarRoles() {
      axios.get("https://localhost:7204/Rol/Leer").then((result) => {
        console.log(result.data.result);
        this.roles = result.data.result;
      });
    },

    borrarRol(iD_rol) {
      console.log(iD_rol);

      axios.delete("https://localhost:7204/Rol/Borrar/" + iD_rol);
      this.consultarRoles();
      window.location.href = "ListarRol";
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