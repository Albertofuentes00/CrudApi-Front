<template>
    <div>
      <div class="card">
        <div class="card-header">Empleados</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Direccion</th>
                <th>Ciudad</th>
                <th>ID Puesto</th>
                <th>ID Departamento</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="empleado in empleados" :key="empleado.iD_Empleado">
                <td>{{ empleado.iD_Empleado }}</td>
                <td>{{ empleado.nombre }}</td>
                <td>{{ empleado.apellidos }}</td>
                <td>{{ empleado.direccion }}</td>
                <td>{{ empleado.ciudad }}</td>
                <td>{{ empleado.puesto.nombre }}</td>
                <td>{{ empleado.departamento.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{Id:articulo.Id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarempleado(empleado.iD_Empleado)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                    |<router-link :to="{path:'/editarempleado'+empleado.iD_Empleado}" class="btn btn-warning">
                      <i class="fa-solid fa-edit">Editar</i>
                     </router-link> &nbsp;|
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="btn-group" role="label" aria-label="">
            <router-link to="/crearempleado" class="btn btn-primary"
            >Nuevo empleado
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
      empleados: [],
    };
  },
  created: function () {
    this.consultarempleados();
  },
  methods: {
    consultarempleados() {
      axios.get("https://localhost:7204/Empleado/Leer").then((result) => {
        console.log(result.data.result);
        this.empleados = result.data.result;
      });
    },

    borrarempleado(iD_Empleado) {
      console.log(iD_Empleado);

      axios.delete("https://localhost:7204/Empleado/Borrar/" + iD_Empleado.toString());
      this.consultarempleados();
      window.location.href = "listarempleado";
    },

    editarempleado(iD_Empleado) {
      
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