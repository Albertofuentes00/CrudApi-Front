<template>
    <div>
      <div class="card">
        <div class="card-header">Puestos</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="puesto in puestos" :key="puesto.iD_Puesto">
                <td>{{ puesto.iD_Puesto }}</td>
                <td>{{ puesto.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{Id:articulo.Id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarPuesto(puesto.iD_Puesto)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                    |<router-link :to="{path:'/editarpuesto/'+puesto.iD_Puesto}" class="btn btn-warning">
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
            <router-link to="/crearpuesto" class="btn btn-primary"
            >Nuevo puesto
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
      puestos: [],
    };
  },
  created: function () {
    this.consultarPuestos();
  },
  methods: {
    consultarPuestos() {
      axios.get("https://localhost:7204/Puesto/Leer").then((result) => {
        console.log(result.data.result);
        this.puestos = result.data.result;
      });
    },

    borrarPuesto(iD_Puesto) {
      console.log(iD_Puesto);

      axios.delete("https://localhost:7204/Puesto/Borrar" + Id);
      this.consultarPuestos();
      window.location.href = "Listarpuesto";
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