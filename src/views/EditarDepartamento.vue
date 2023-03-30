<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Departamento      </div>
      <div class="card-body">

        <form @submit.prevent="updateData">
          <div class="form-group">
            <label for="">Nombre:</label>
            <input
              type="text"
              class="form-control"
              name="User"
              v-model="nombre"
              aria-describedby="helpId"
              id="user"
              placeholder="Nuevo departamento"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del nuevo departamento</small
            >
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" 
            v-on:click="updateData(departamento.iD_Departamento)"
            class="btn btn-success">Guardar</button>|
            >|
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      iD_Departamento: '',
      datos: {
        nombre: ''
      },
    };
  },
  mounted() {
    const userId = this.$route.params.id;

    axios
      .get("https://localhost:7204/Departamento/Consultar"+userId)
      .then(response => {

        this.datos = response.data.result;
        // this.iD_Departamento = response.data.result.iD_Departamento;
        // this.nombre = response.data.result.nombre;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    updateData() {
      const updatedData = {
        nombre: this.nombre
      };
      axios
        .put("https://localhost:7204/Departamento/Editar"+this.iD_Departamento, this.datos)
        .then(response => {
          console.log(response.data.result);
          this.$router.push('/listardepartment')
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>