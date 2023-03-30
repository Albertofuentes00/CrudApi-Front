<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Nuevo Rol       </div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="rol.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del nuevo rol</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ name: 'listarRol' }" class="btn btn-danger"
                >Cancelar</router-link
              >|
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        rol: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.rol);
  
        var datosEnviar = {
           nombre: this.rol.nombre,
        };
  
        axios
          .post("https://localhost:7204/Rol/Postear", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "listarRol";
          });
      },
    },
  };
  </script> 