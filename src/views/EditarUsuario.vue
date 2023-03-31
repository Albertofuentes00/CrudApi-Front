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
                v-model="datos.user"
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
                v-model="datos.password"
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
                v-model="datos.FechaRegistro"
                aria-describedby="helpId"
                placeholder="Fecha"
              />
              <small id="helpId" class="form-text" text-muted
                >Ingresa la fecha de Registro</small
              >
            </div>

            <label for="fkCliente">Seleccionar un Rol:</label>
              <select id="fkCliente" v-model="datos.idRol" class="form-control">
                <option v-for="rol in roles" :key="rol.iD_Rol" :value="rol.iD_Rol">
                  {{rol.nombre}}
                </option>
              </select>

              <br>

              <label for="fkCliente">Seleccionar un Empleado:</label>
              <select id="fkCliente" v-model="datos.idEmpleado" class="form-control">
                <option v-for="empleado in empleados" :key="empleado.iD_Empleado" :value="empleado.iD_Empleado">
                  {{empleado.nombre}}
                </option>
              </select>

            <br />
  
            <div class="btn-group" role="group">
              |<button type="submit" 
              v-on:click="updateData(usuario.id)"
              class="btn btn-success"
              >Guardar cambios</button>|
              
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>


<!-- <script>
import axios from 'axios';

export default {
  data() {
    return {
      id: null,
      datos: {
        user: '',
        password: '',
        fechaRegistro: '',
        idEmpleado: '',
        idRol: ''
      },
      empleados: []
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    axios.get("https://localhost:7204/Usuario/BuscarPorID" + this.id)
      .then(response => {
        this.datos = response.data.result;
      })
      .catch(error => {
        console.error(error);
      });

    axios.get("https://localhost:7204/Usuario/Leer")
      .then(response => {
        this.clientes = response.data.result;
      })
      .catch(error => {
        console.error(error);
      });

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
    submitForm() {
      axios.put("https://localhost:7204/Usuario/Editar/" + this.id, this.datos)
        .then(response => {
          console.log('Registro actualizado:', response.data.result);
          this.$router.push('/listar')
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script> -->


<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: null,
      datos: {
        user: '',
        password: '',
        FechaRegistro: '',
        idRol: '',
        idEmpleado: ''
      },

      roles: [],
      empleados: []

    }
  },
  mounted() {
    this.id = this.$route.params.id;
    axios.get("https://localhost:7204/Usuario/BuscarPorID/" + this.id)
      .then(response => {
        this.datos = response.data.result;
      })
      .catch(error => {
        console.error(error);
      });

    axios.get("https://localhost:7204/Usuario/Leer")
      .then(response => {
        this.usuarios = response.data.result;
      })
      .catch(error => {
        console.error(error);
      });

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
    submitForm() {
      axios.put("https://localhost:7204/Usuario/Editar/" + this.id, this.datos)
        .then(response => {
          console.log('Registro actualizado:', response.data.result);
          this.$router.push('/listar')
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>