<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Nueva Factura             </div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Razon social:</label>
              <input
                type="text"
                class="form-control"
                name="User"
                v-model="factura.razonSocial"
                aria-describedby="helpId"
                id="user"
                placeholder="razon"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la razon social</small
              >
            </div>
            <div class="form-group">
              <label for="">Fecha:</label>
              <input
              type="date"
              class="form-control"
              name="nombre"
              id="apellidos"
              v-model="factura.fecha"
              aria-describedby="helpId"
              placeholder="fecha"
               />
              <small id="helpId" class="form-text" text-muted
              >Ingresa la fecha</small
             >
            </div>

            <div class="form-group">
              <label for="">RFC:</label>
              <input
                type="text"
                class="form-control"
                name="RFC"
                id="RFC"
                v-model="factura.rfc"
                aria-describedby="helpId"
                placeholder="RFC"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la RFC</small
              >
            </div>


            <div class="form-group">
              <label for="">ID Cliente:</label>
              <input
                type="text"
                class="form-control"
                name="ciudad"
                id="ciudad"
                v-model="factura.idCliente"
                aria-describedby="helpId"
                placeholder="ID Cliente"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el ID del Cliente</small
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
        factura: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.factura);
  
        var datosEnviar = {
          RazonSocial: this.factura.razonSocial,
          Fecha: this.factura.fecha,
          RFC: this.factura.rfc,
          IdCliente: this.factura.idCliente,
        };
  
        axios
          .post("https://localhost:7204/Factura/Postear", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "listarfactura";
          });
      },
    },
  };
  </script> 