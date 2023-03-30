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
                name="password"
                id="password"
                v-model="usuario.password"
                aria-describedby="helpId"
                placeholder="Password"
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



            <label for="fkCliente">Seleccionar un Rol:</label>
              <select id="fkCliente" v-model="usuario.idRol" class="form-control">
                <option v-for="rol in roles" :key="rol.iD_Rol" :value="rol.iD_Rol">
                  {{rol.nombre}}
                </option>
              </select>

              <br>

              <label for="fkCliente">Seleccionar un Empleado:</label>
              <select id="fkCliente" v-model="usuario.idEmpleado" class="form-control">
                <option v-for="empleado in empleados" :key="empleado.iD_Empleado" :value="empleado.iD_Empleado">
                  {{empleado.nombre}}
                </option>
              </select>

            <br />







            <!-- <div class="form-group">
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
            </div> -->
  
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
        datos: {
          idRol: 0,
          idEmpleado: 0
        },
        roles: [],
        empleados: []
      }
    },
    mounted() {
      axios.get("https://localhost:7204/Rol/Leer")
        .then(response => {
          this.roles = response.data.result;
        })
        .catch(error => {
          console.error(error);
      });

      axios.get("https://localhost:7204/Empleado/Leer")
        .then(response => {
          this.empleados = response.data.result;
        })
        .catch(error => {
          console.error(error);
      });
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
          .post("https://localhost:7204/Usuario/Postear", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "Listar";
          });
      },
    },
  };
  </script> 