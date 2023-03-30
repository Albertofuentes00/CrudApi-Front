<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Nuevo Cliente            </div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="User"
                v-model="cliente.nombre"
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
                v-model="cliente.apellidos"
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
                v-model="cliente.telefono"
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
                v-model="cliente.email"
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
                v-model="cliente.direccion"
                aria-describedby="helpId"
                placeholder="direccion"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la direccion</small
              >
            </div>


            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ name: 'listarcliente' }" class="btn btn-danger"
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
        cliente: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.cliente);
  
        var datosEnviar = {
          Nombre: this.cliente.nombre,
          Apellidos: this.cliente.apellidos,
          telefono: this.cliente.telefono,
          Email: this.cliente.email,
          Direccion: this.cliente.direccion,
        };
  
        axios
          .post("https://localhost:7204/Cliente/Postear", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "listarcliente";
          });
      },
    },
  };
  </script> 