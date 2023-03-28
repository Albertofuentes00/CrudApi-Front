<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Factura             </div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Razon social:</label>
              <input
                type="text"
                class="form-control"
                name="User"
                v-model="RazonSocial"
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
                type="text"
                class="form-control"
                name="fecha"
                id="fecha"
                v-model="fecha"
                aria-describedby="helpId"
                placeholder="fecha"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de factura</small
              >
            </div>

            <div class="form-group">
              <label for="">RFC:</label>
              <input
                type="text"
                class="form-control"
                name="RFC"
                id="RFC"
                v-model="rfc"
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
                v-model="idCliente"
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
        iD_Factura: '',
        RazonSocial: '',
        fecha:'',
        rfc:'',
        idCliente:'',
      };
    },
    mounted() {
      const userId = this.$route.params.id;
  
      axios
        .get("https://localhost:7204/Factura/Leer"+userId)
        .then(response => {
          this.iD_Factura = response.data.result.iD_Factura;
          this.RazonSocial = response.data.result.RazonSocial;
          this.fecha = response.data.result.fecha;
          this.rfc = response.data.result.rfc;
          this.idCliente = response.data.result.idCliente;
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
          .put("https://localhost:7204/Factura/Editar"+this.iD_Factura, updatedData)
          .then(response => {
            console.log(response.data.result);
            this.$router.push('/listarfactura')
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>