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
            <tr v-for="factura in facturas" :key="factura.iD_Factura">
              <td>{{ factura.iD_Factura }}</td>
              <td>{{ factura.razonSocial }}</td>
              <td>{{ factura.fecha }}</td>
              <td>{{ factura.rfc }}</td>
              <td>{{ factura.cliente.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{Id:articulo.Id}}" class="btn btn-info">Editar</router-link> | -->
                  |<button
                    type="button"
                    v-on:click="borrarFactura(factura.iD_Factura)"
                    class="btn btn-danger"
                  >
                    Eliminar</button
                  >|
                  |<router-link :to="{path:'/editarfactura/'+factura.iD_Factura}" class="btn btn-warning">
                    <i class="fa-solid fa-edit">Editar</i>
                   </router-link> &nbsp;|
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="btn-group" role="label" aria-label="">
          <router-link to="/crearfactura" class="btn btn-primary"
          >Nueva factura
          </router-link> &nbsp;|
          <router-link to="/dashboard" class="btn btn-secondary"
            >Regresar
            </router-link>
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
      this.facturas = result.data.result;
    });
  },

  borrarFactura(iD_Factura) {
    console.log(iD_Factura);

    axios.delete("https://localhost:7204/Factura/Borrar/" + iD_Factura.toString());
    this.consultarFacturas();
    window.location.href = "listarfactura";
  },

  editarFactura(iD_Factura) {
    
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