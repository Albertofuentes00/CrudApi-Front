<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Agregar Nuevo Usuario      </div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">User:</label>
              <input
                type="text"
                class="form-control"
                name="User"
                v-model="usuario.user"
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
                name="Password"
                id="Password"
                v-model="articulo.password"
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
                v-model="usuario.FechaRegistro"
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
                v-model="usuario.idEmpleado"
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
                v-model="usuario.idRol"
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
        usuario: {},
      };
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.usuario);
  
        var datosEnviar = {
          User: this.usuario.user,
          Password: this.usuario.password,
          FechaRegistro: this.usuario.FechaRegistro,
          IDEmpleado: this.usuario.idEmpleado,
          IDRol: this.usuario.idRol
        };
  
        axios
          .post("https://localhost:7204/Usuario", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "listar";
          });
      },
    },
  };
  </script>


