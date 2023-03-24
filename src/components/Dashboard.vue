<template>
    <div>
        <main role="main" class="pb-3">
                <input type="checkbox" id="abrir-cerrar" name="abrir-cerrar" value="">
                  <label for="abrir-cerrar">&#9776; <span class="abrir">Abrir</span><span class="cerrar">Cerrar</span></label>
                    <div id="sidebar" class="sidebar">
                        <div class="Hola">
                          <li><img id="icon" src='src\assets\LOGO_Scale.png'></li>
                          <li><p id="Beto">Beto</p></li>
                        </div>
                     <ul class="menu"> 
                        <!--donde estan los simbolos de gato se pone la direcciona que se redireccionara-->
                         <li><li><RouterLink to="/dashboard">Home</RouterLink></li></li>
                         <hr id="line" size="2px" color="white" />
                         <li id="Section"><p>Usuarios</p></li>
                         <li><li><RouterLink to="/listar">Listar</RouterLink></li></li>
                         <li><li><RouterLink to="/crear">Crear</RouterLink></li></li>
                         <hr id="line" size="2px" color="white" />
                         <li id="Section"><p>Clientes</p></li>
                         <hr id="line" size="2px" color="white" />
                         <li id="Section"><p>Empleados</p></li>
                         <hr id="line" size="2px" color="white" />
                         <li id="Section"><p>Facturas</p></li>
                         <hr id="line" size="2px" color="white" />
                         <li id="Section"><p>Roles</p></li>
                         <hr id="line" size="2px" color="white" />
                         <li id="Section"><p>Puestos</p></li>
                         <hr id="line" size="2px" color="white" />
                         <li id="Section"><p>Departamentos</p></li>
                         <li><li><RouterLink to="/listar">Listar</RouterLink></li></li>
                         <li><li><RouterLink to="/creardepartment">Crear</RouterLink></li></li>
                         <hr id="line" size="2px" color="white" />
                         <li><li><RouterLink to="/">Salir</RouterLink></li></li>
                      </ul>
                     </div>
        </main>
    </div>
</template>

<style scoped>
body {
    font-family: "Segoe UI", sans-serif;
    font-size:100%;
    margin:0;
    padding:0;
    background-color: #2b2b2b;
}


header {
    background:#333;
    color:#eee;
    width:100%;
}

input#abrir-cerrar {
    visibility:hidden;
    position: absolute;
    top: -9999px;
}


label[for="abrir-cerrar"] {
    cursor:pointer;
    padding: 1rem;
    background-color:#9e0191;
    font-family: VCR OSD Mono;
    color:#fff;
    display:inline-bloc;
    position: fixed;
    width:10000px;
    top: 0%;
    left: 0%;

}

.cerrar {
    display:none;
}

#sidebar {
    width:0;
    font-family: VCR OSD Mono;
    background-color: #080808;
}

#contenido {
    margin-left:0;
}

input#abrir-cerrar:checked ~ #sidebar {
    width:200px;
}

input#abrir-cerrar:checked + label[for="abrir-cerrar"], input#abrir-cerrar:checked ~ #contenido {
    margin-left:200px;
    transition: margin-left .4s;
}


input#abrir-cerrar:checked + label[for="abrir-cerrar"] .cerrar {
    display:inline;
}

input#abrir-cerrar:checked + label[for="abrir-cerrar"] .abrir {
    display:none;
}

.sidebar {
    position: fixed;
    height: 100%;
    width: 0;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: #080808;
    overflow-x: hidden;
    transition: 0.4s;
    padding: 1rem 0;
    box-sizing:border-box;
}

.sidebar .boton-cerrar {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    font-size: 2rem;
    display: block;
    padding: 0;
    line-height: 1.5rem;
    margin: 0;
    height: 32px;
    width: 32px;
    text-align: center;
    vertical-align: top;
}

/* aqui van los bordes */
.sidebar ul, .sidebar li{
    margin: 0px;;
    padding: 5px;;
    list-style:none inside;
}

.sidebar ul {
    margin: 8rem auto;
    display: block;
    width: 100%;
    min-width:500px;
}

.sidebar a {
    display: block;
    font-size: 120%;
    color: #eee;
    text-decoration: none;
    
}

.sidebar a:hover{
    color:#fff;
    background-color: hsla(310, 94%, 52%, 0.911)

}

h1 {
    color:#f90;
    font-size:180%;
    font-weight:normal;
}

.abrir-cerrar {
    color: #2E88C7;
    font-size:1rem;   
}

#icon{
    width: 70px;
    height: 70pxS;
}

.menu{
    position: relative;
}

.Hola{
  color:#fff;
  position: absolute;
  margin: 0%;
  /* top: 5%;
  left: 30%; */
}

#Section{
    color: #d9a9f0;
}

#line{
    color: #ffffff;
}

</style>