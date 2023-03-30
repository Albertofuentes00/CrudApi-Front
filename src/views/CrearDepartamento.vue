<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Nuevo Departamento      </div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="User"
                v-model="departamento.nombre"
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
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ name: 'listardepartment' }" class="btn btn-danger"
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
        departamento: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.departamento);
  
        var datosEnviar = {
           nombre: this.departamento.nombre,
        };
  
        axios
          .post("https://localhost:7204/Departamento/Postear", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "listardepartment";
          });
      },
    },
  };
  </script> 