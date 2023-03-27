<template>
    <div>
      <div class="card">
        <div class="card-header">Facturas</div>
  
        <div class="card_body">
          <table class="table">
            <thead>
              <tr>
                <th>No. Factura</th>
                <th>Razon Social</th>
                <th>Fecha</th>
                <th>RFC</th>
                <th>ID Cliente</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="factura in facturas" :key="factura.NoFactura">
                <td>{{ factura.NoFactura }}</td>
                <td>{{ factura.RazonSocial }}</td>
                <td>{{ factura.fecha }}</td>
                <td>{{ factura.rfc }}</td>
                <td>{{ factura.idCliente }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{Id:articulo.Id}}" class="btn btn-info">Editar</router-link> | -->
                    |<button
                      type="button"
                      v-on:click="borrarFactura(factura.NoFactura)"
                      class="btn btn-danger"
                    >
                      Eliminar</button
                    >|
                    |<button
                      type="button"
                      v-on:click="borrarFactura(factura.NoFactura)"
                      class="btn btn-warning"
                    >
                      Editar</button
                    >|
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      facturas: [],
    };
  },
  created: function () {
    this.consultarFacturas();
  },
  methods: {
    consultarFacturas() {
      axios.get("https://localhost:7204/Factura/Leer").then((result) => {
        console.log(result.data.result);
        this.factura = result.data.result;
      });
    },

    borrarFactura(NoFactura) {
      console.log(NoFactura);

      axios.delete("https://localhost:7204/Factura/Borrar/" + NoFactura.toString());
      this.consultarFacturas();
      window.location.href = "Listar";
    },

    editarFactura(NoFactura) {
      
    }
  },
};
</script>

<style>

  .card-style{
    color: black;
  }

  .thead{
    font-size: 20px;
  }


</style>