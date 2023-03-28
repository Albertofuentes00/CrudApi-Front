<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Puesto      </div>
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
                placeholder="Nuevo puesto"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del nuevo puesto</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" 
              v-on:click="updateData(puesto.iD_Puesto)"
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
        iD_Puesto: '',
        nombre: ''
      };
    },
    mounted() {
      const userId = this.$route.params.id;
  
      axios
        .get("https://localhost:7204/Puesto/Leer"+userId)
        .then(response => {
          this.iD_Puesto = response.data.result.iD_Puesto;
          this.nombre = response.data.result.nombre;
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
          .put("https://localhost:7204/Puesto/Editar"+this.iD_Puesto, updatedData)
          .then(response => {
            console.log(response.data.result);
            this.$router.push('/listarpuesto')
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>