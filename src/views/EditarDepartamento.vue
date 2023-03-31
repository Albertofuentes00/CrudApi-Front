<template>
  <label id="header"></label><br><br><br>
  <div class="container">
    <div class="card">
      <div class="card-header">Editar Departamento</div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="">User:</label>
            <input
              type="text"
              class="form-control"
              name="nombre"
              v-model="datos.nombre"
              aria-describedby="helpId"
              id="nombre"
              placeholder="Nombre"
            />
            <small id="helpId" class="form-text" text-muted
              >Ingresa el nombre del departamento</small
            >
            </div>
          <br />

          <button type="submit" class="btn btn-primary">Guardar cambios</button>
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
      id: null,
      datos: {
        nombre: ''
      },
      clientes: []
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    axios.get("https://localhost:7204/Departamento/ByID/" + this.id)
      .then(response => {
        this.datos = response.data.result;
      })
      .catch(error => {
        console.error(error);
      });

    axios.get("https://localhost:7204/Departamento")
      .then(response => {
        this.clientes = response.data.result;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    submitForm() {
      axios.put("https://localhost:7204/Departamento/Editar/" + this.id, this.datos)
        .then(response => {
          console.log('Registro actualizado:', response.data.result);
          this.$router.push('/listardepartment')
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>