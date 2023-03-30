<template>
    <div>
      <div class="card">
        <div class="card-header">Departamentos</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="departamento in departamentos" :key="departamento.iD_Departamento">
                <td>{{ departamento.iD_Departamento }}</td>
                <td>{{ departamento.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{Id:articulo.Id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarDepartamento(departamento.iD_Departamento)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                      <router-link :to="{path:'/editardepartment/'+departamento.iD_Departamento}" class="btn btn-warning">
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
          <router-link to="/creardepartment" class="btn btn-primary"
          >Nuevo departamento
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
      departamentos: [],
    };
  },
  created: function () {
    this.consultarDepartamentos();
  },
  methods: {
    consultarDepartamentos() {
      axios.get("https://localhost:7204/Departamento/Consultar").then((result) => {
        console.log(result.data.result);
        this.departamentos = result.data.result;
      });
    },

    borrarDepartamento(iD_Departamento) {
      console.log(iD_Departamento);

      axios.delete("https://localhost:7204/Departamento/Borrar/" + iD_Departamento);
      this.consultarDepartamentos();
      window.location.href = "Listardepartment";
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