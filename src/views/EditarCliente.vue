<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Cliente            </div>
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
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del empleado</small
              >
            </div>
            <div class="form-group">
              <label for="">Apellidos:</label>
              <input
                type="text"
                class="form-control"
                name="apellidos"
                id="apellidos"
                v-model="apellidos"
                aria-describedby="helpId"
                placeholder="Apellidos"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa los apellidos</small
              >
            </div>

            <div class="form-group">
              <label for="">Telefono:</label>
              <input
                type="text"
                class="form-control"
                name="telefono"
                id="telefono"
                v-model="telefono"
                aria-describedby="helpId"
                placeholder="telefono"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el telefono</small
              >
            </div>


            <div class="form-group">
              <label for="">Email:</label>
              <input
                type="text"
                class="form-control"
                name="email"
                id="email"
                v-model="email"
                aria-describedby="helpId"
                placeholder="email"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el email</small
              >
            </div>

            <div class="form-group">
              <label for="">Direccion:</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                id="direccion"
                v-model="direccion"
                aria-describedby="helpId"
                placeholder="direccion"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la direccion</small
              >
            </div>


            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" 
              v-on:click="updateData(cliente.iD_Cliente)"
              class="btn btn-success">Guardar</button>|
              >
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
        iD_Cliente: '',
        nombre: '',
        apellidos:'',
        telefono:'',
        email:'',
        direccion:''
      };
    },
    mounted() {
      const userId = this.$route.params.iD_Cliente;
  
      axios
        .get("https://localhost:7204/Cliente/BuscarPorID/"+userId)
        .then(response => {
          this.iD_Cliente = response.data.result.iD_Cliente;
          this.nombre = response.data.result.nombre;
          this.apellidos = response.data.result.apellidos;
          this.telefono = response.data.result.telefono;
          this.email = response.data.result.email;
          this.direccion = response.data.result.direccion;

        })
        .catch(error => {
          console.error(error);
        });
    },
    methods: {
      updateData() {
        const updatedData = {
          iD_Cliente: this.iD_Cliente,
          nombre: this.nombre,
          apellidos: this.apellidos,
          telefono: this.telefono,
          email: this.email,
          direccion: this.direccion,
          
        };
        axios
          .put("https://localhost:7204/Cliente/Editar/"+this.iD_Cliente, updatedData)
          .then(response => {
            console.log(response.data.result);
            this.$router.push('/listarcliente')
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>