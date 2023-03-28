<template>
    <div class="row mt-3">
        <div class="col-md-6 offset-md-3">
            <div class="card">
                <div class="card-header bg-dark text-white text-center">Editar Puesto</div>
                <div class="card-body">
                    <form @submit.prevent="updateData"  > 
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="fa-solid fa-gift"></i></span>
                            <input type="text" id="nombre" 
                            v-model="nombre"
                            class="form-control" required>
                        </div>
                        <div class="d-grid col-6 mx-auto">
                            <button type="submit"  class="btn btn-success"><i class="fa-solid fa-floppy-disk"></i>  Guardar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        pkPuesto: '',
        nombre: ''
    };
  },
  mounted() {
    const userId = this.$route.params.id;

    axios
      .get("https://localhost:7243/api/Puesto/consultarid/"+userId)
      .then(response => {
        this.pkPuesto = response.data.result.pkPuesto;
        this.nombre = response.data.result.nombre;
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
        .put("https://localhost:7243/api/Puesto/ActualizarP/"+this.pkPuesto, updatedData)
        .then(response => {
          console.log(response.data.result);
          this.$router.push('/')
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>