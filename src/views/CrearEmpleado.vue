<template>
    <div class="container">
      <div class="card">
        <div class="card-header">Nuevo Empleado             </div>
        <div class="card-body">
          <form v-on:submit.prevent="agregarRegistro">
            <div class="form-group">
              <label for="">Nombre:</label>
              <input
                type="text"
                class="form-control"
                name="User"
                v-model="empleado.nombre"
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
                v-model="empleado.apellidos"
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
                v-model="empleado.direccion"
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
                v-model="empleado.ciudad"
                aria-describedby="helpId"
                placeholder="ciudad"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la ciudad</small
              >
            </div>

            <!-- <div class="form-group">
              <label for="">ID Puesto:</label>
              <input
                type="text"
                class="form-control"
                name="idPuesto"
                id="idPuesto"
                v-model="empleado.idPuesto"
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
                v-model="empleado.idDepartamento"
                aria-describedby="helpId"
                placeholder="ID de departamento"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa el ID del departamento</small
              >
            </div> -->

            <label for="idPuesto">Seleccionar un Puesto:</label>
              <select id="idPuesto" v-model="empleado.idPuesto" class="form-control">
                <option v-for="puesto in puestos" :key="puesto.iD_Puesto" :value="puesto.iD_Puesto">
                  {{puesto.nombre}}
                </option>
              </select>

              <br>

              <label for="idDepartamento">Seleccionar un Departamento:</label>
              <select id="idDepaartamento" v-model="empleado.idDepartamento" class="form-control">
                <option v-for="departamento in departamentos" :key="departamento.iD_Departamento" :value="departamento.iD_Departamento">
                  {{departamento.nombre}}
                </option>
              </select>

            <br />



            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" class="btn btn-success">Agregar</button>|
              |<router-link :to="{ name: 'listarempleado' }" class="btn btn-danger"
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
        empleado: {},
        datos: {
          idPuesto: 0,
          idDepartamento: 0
        },
        puestos: [],
        departamentos: []
      };
    },
    mounted() {
      axios.get("https://localhost:7204/Puesto/Leer")
        .then(response => {
          this.puestos = response.data.result;
        })
        .catch(error => {
          console.error(error);
      });

      axios.get("https://localhost:7204/Departamento/Consultar")
        .then(response => {
          this.departamentos = response.data.result;
        })
        .catch(error => {
          console.error(error);
      });
    },
  
    methods: {
      agregarRegistro() {
        console.log(this.empleado);
  
        var datosEnviar = {
          Nombre: this.empleado.nombre,
          Apellidos: this.empleado.apellidos,
          Direccion: this.empleado.direccion,
          Ciudad: this.empleado.ciudad,
          IDPuesto: this.empleado.idPuesto,
          IdDepartamento: this.empleado.idDepartamento
        };
  
        axios
          .post("https://localhost:7204/Empleado/Postear", datosEnviar)
          .then((result) => {
            console.log(result);
            window.location.href = "Listarempleado";
          });
      },
    },
  };
  </script> 