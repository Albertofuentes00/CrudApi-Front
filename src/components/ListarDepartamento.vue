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
              <tr v-for="departamento in departamentos" :key="departamento.id">
                <td>{{ departamento.id }}</td>
                <td>{{ departamento.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{Id:articulo.Id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarDepartamento(departamento.id)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                    |<button
                      type="button"
                      v-on:click="borrarDepartamento(departamento.id)"
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
      departamentos: [],
    };
  },
  created: function () {
    this.consultarDepartamentos();
  },
  methods: {
    consultarDepartamentos() {
      axios.get("https://localhost:7204/Departamento").then((result) => {
        console.log(result.data.result);
        this.departamentos = result.data.result;
        console.log(departamento[0].id)
      });
    },

    borrarDepartamento(Id) {
      console.log(Id);

      axios.delete("https://localhost:7204/Departamento/Borrar/" + id.toString());
      this.consultarDepartamentos();
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