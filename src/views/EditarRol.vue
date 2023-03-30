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
                v-model="datos.nombre"
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
        id: null,
        datos: {
          nombre: '',
        },
        clientes: []
      }
    },
    mounted() {
      this.id = this.$route.params.id;
      axios.get("https://localhost:7204/Rol/Leer" + this.id)
        .then(response => {
          this.datos = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
  
      axios.get("https://localhost:7204/Rol/")
        .then(response => {
          this.clientes = response.data.result;
        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
      submitForm() {
        axios.put("https://localhost:7204/Rol/Editar/" + this.id, this.datos)
          .then(response => {
            console.log('Registro actualizado:', response.data.result);
            this.$router.push('/listarr')
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  }
</script>