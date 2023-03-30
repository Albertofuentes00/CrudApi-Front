 <!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Factura</div>
      <div class="card-body">
        <form v-on:submit.prevent="actualizarRegistro">
          <div class="form-group">
            <label for="">Razon Social:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="factura.razonSocial"
              aria-describedby="helpId"
              id="nombre"
              placeholder="Razon Social"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa la razon social</small
            >
          </div>
          <div class="form-group">
            <label for="">RFC:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              id="apellidos"
              v-model="factura.rfc"
              aria-describedby="helpId"
              placeholder="RFC"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el RFC</small
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
            <label for="">Cliente:</label><br />
            <select v-model="factura.idCliente">
              <option v-for="cliente in clientes" v-bind:value="cliente.iD_Cliente">
                {{ cliente.nombre }}
              </option>
            </select>
            <span>Seleccionado: {{ factura.idCliente }}</span>
          </div>

          <br />

          <div class="btn-group" role="group">
            |<button type="submit" class="btn btn-success">Modificar</button>| |<button
              type="button" class="btn btn-danger"
              v-on:click="listar"
            >
              Cancelar</button
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
      clientes: [],
    };
  },

  created: function () {
    this.obtenerInformacionID();
    this.consultarClientes();
  },

  methods: {
    obtenerInformacionID() {
      axios
        
        .get("https://localhost:7204/Factura/Editar" + this.$route.params.id)
        .then((result) => {
          console.log(result.data.value.result);
          this.factura = result.data.value.result;
        });
    },

    listar() {
      this.actualizarRegistro();
      this.$router.push("/listarfactura");
    },

    actualizarRegistro() {
      let datosEnviar = {
        RazonSocial: this.factura.RazonSocial,
        fecha: this.factura.fecha,
        rfc: this.factura.rfc,
        idCliente: this.factura.idCliente,
      };

      axios
        .put(
          "https://localhost:7204/Factura/Editar?Id=" + this.$route.params.id,
          datosEnviar
        )
        .then((result) => {
          console.log(result);
          this.$router.push("/listarfactura");
        });
    },
    consultarClientes() {
      axios.get("https://localhost:7204/Cliente/Leer").then((result) => {
        console.log(result.data.result);
        this.clientes = result.data.result;
      });
    },
  },
};
</script>