<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Editar Usuario      </div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">User:</label>
              <input
                type="text"
                class="form-control"
                name="User"
                v-model="user"
                aria-describedby="helpId"
                id="user"
                placeholder="Username"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el nombre del usuario</small
              >
            </div>
            <div class="form-group">
              <label for="">Password:</label>
              <input
                type="text"
                class="form-control"
                name="password"
                id="password"
                v-model="password"
                aria-describedby="helpId"
                placeholder="Proveedor"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la contraseña</small
              >
            </div>

            <div class="form-group">
              <label for="">Fecha de Registro:</label>
              <input
                type="text"
                class="form-control"
                name="precio"
                id="precio"
                v-model="FechaRegistro"
                aria-describedby="helpId"
                placeholder="Fecha"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de Registro</small
              >
            </div>

            <div class="form-group">
              <label for="">ID Empleado:</label>
              <input
                type="text"
                class="form-control"
                name="idEmpleado"
                id="idEmpleado"
                v-model="idEmpleado"
                aria-describedby="helpId"
                placeholder="ID de Empleado"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el ID del Empleado</small
              >
            </div>

            <div class="form-group">
              <label for="">ID Rol:</label>
              <input
                type="text"
                class="form-control"
                name="idRol"
                id="idRol"
                v-model="idRol"
                aria-describedby="helpId"
                placeholder="ID de Rol"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el ID del Rol</small
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
        id: '',
        user: '',
        password:'',
        fechaRegistro:'',
        idEmpleado:'',
        idRol:'',
      };
    },
    mounted() {
      const userId = this.$route.params.id;
  
      axios
        .get("https://localhost:7204/Usuario/Leer"+userId)
        .then(response => {
          this.id = response.data.result.id;
          this.user = response.data.result.user;
          this.password = response.data.result.password;
          this.fechaRegistro = response.data.result.fechaRegistro;
          this.idEmpleado = response.data.result.idEmpleado;
          this.idRol = response.data.result.idRol;
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
          .put("https://localhost:7204/Usuario/Editar"+this.iD_Empleado, updatedData)
          .then(response => {
            console.log(response.data.result);
            this.$router.push('/listar')
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>