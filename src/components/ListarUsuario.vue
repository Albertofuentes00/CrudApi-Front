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
                <td>{{ usuario.idEmpleado }}</td>
                <td>{{ usuario.idRol }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarUsuario(usuario.id)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                    |<button
                      type="button"
                      v-on:click="borrarUsuario(usuario.id)"
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
      usuarios: [],
    };
  },
  created: function () {
    this.consultarUsuario();
  },
  methods: {
    consultarUsuario() {
      axios.get("https://localhost:7204/Usuario").then((result) => {
        console.log(result.data.result);
        this.usuarios = result.data.result;
        console.log(usuario[0].id)
      });
    },

    borrarUsuario(id) {
      console.log(id);

      axios.delete("https://localhost:7204/Usuario/Borrar/" + id.toString());

      window.location.href = "listar";
    },
  },
};
</script>


