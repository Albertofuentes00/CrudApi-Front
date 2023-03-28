<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Empleado             </div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="User"
                v-model="nombre"
                aria-describedby="helpId"
                id="user"
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
                v-model="apellidos"
                aria-describedby="helpId"
                placeholder="Apellidos"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa los apellidos</small
              >
            </div>

            <div class="form-group">
              <label for="">Direccion:</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                id="direccion"
                v-model="direccion"
                aria-describedby="helpId"
                placeholder="Direccion"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la direccion</small
              >
            </div>


            <div class="form-group">
              <label for="">Ciudad:</label>
              <input
                type="text"
                class="form-control"
                name="ciudad"
                id="ciudad"
                v-model="ciudad"
                aria-describedby="helpId"
                placeholder="ciudad"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la ciudad</small
              >
            </div>

            <div class="form-group">
              <label for="">ID Puesto:</label>
              <input
                type="text"
                class="form-control"
                name="idPuesto"
                id="idPuesto"
                v-model="idPuesto"
                aria-describedby="helpId"
                placeholder="ID de Puesto"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el ID del Puesto</small
              >
            </div>
  
            <div class="form-group">
              <label for="">ID Departamento:</label>
              <input
                type="text"
                class="form-control"
                name="idDep"
                id="idDep"
                v-model="idDepartamento"
                aria-describedby="helpId"
                placeholder="ID de departamento"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el ID del departamento</small
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
        iD_Empleado: '',
        nombre: '',
        apellidos:'',
        direccion:'',
        ciudad:'',
        idPuesto:'',
        idDepartamento:''
      };
    },
    mounted() {
      const userId = this.$route.params.id;
  
      axios
        .get("https://localhost:7204/Empleado/Leer"+userId)
        .then(response => {
          this.iD_Empleado = response.data.result.iD_Empleado;
          this.nombre = response.data.result.nombre;
          this.apellidos = response.data.result.apellidos;
          this.direccion = response.data.result.telefono;
          this.ciudad = response.data.result.email;
          this.idPuesto = response.data.result.idPuesto;
          this.idDepartamento = response.data.result.idDepartamento;
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
          .put("https://localhost:7204/Empleado/Editar"+this.iD_Empleado, updatedData)
          .then(response => {
            console.log(response.data.result);
            this.$router.push('/listarempleado')
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>