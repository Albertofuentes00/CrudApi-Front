<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Nuevo Puesto       </div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                v-model="puesto.nombre"
                aria-describedby="helpId"
                id="nombre"
                placeholder="Nombre"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del nuevo puesto</small
              >
            </div>
  
            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ name: 'listar' }" class="btn btn-danger"
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
        puesto: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.puesto);
  
        var datosEnviar = {
           nombre: this.puesto.nombre,
        };
  
        axios
          .post("https://localhost:7204/Puesto", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "listarpuesto";
          });
      },
    },
  };
  </script> 