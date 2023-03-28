<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Rol      </div>
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
                placeholder="Nuevo rol"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del nuevo rol</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" 
              v-on:click="updateData(rol.iD_Rol)"
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
        iD_Rol: '',
        nombre: ''
      };
    },
    mounted() {
      const userId = this.$route.params.id;
  
      axios
        .get("https://localhost:7204/Rol/Leer"+userId)
        .then(response => {
          this.iD_Rol = response.data.result.iD_Rol;
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
          .put("https://localhost:7204/Rol/Editar"+this.iD_Rol, updatedData)
          .then(response => {
            console.log(response.data.result);
            this.$router.push('/listarRol')
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>