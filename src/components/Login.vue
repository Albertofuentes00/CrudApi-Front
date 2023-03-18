<template>
  <header data-v-7a7a37b1="">
    <img data-v-7a7a37b1="" alt="Beto logo" class="logo" src="/src/assets/LOGO_Scale.png" width="250" height="250">
    <div data-v-7a7a37b1="" class="wrapper">
      <div data-v-e17ea971="" data-v-7a7a37b1="" class="greetings">
        <h1 data-v-e17ea971="" class="green">ERROR 404</h1>
        <h3 data-v-e17ea971=""> 
          01000100 01101001 01110011 01100011 01110101 01101100 01110000 01100101 00100000 01101100 01100001
           01110011 00100000 01101101 01101111 01101100 01100101 01110011 01110100 01101001 01100001 01110011 
          </h3>
        </div>
      </div>
    </header>
  <main data-v-7a7a37b1="">
    <div data-v-1de1600f="" id="app">
      <div data-v-1de1600f="" id="login">
        <div data-v-1de1600f="" id="form">
          <form data-v-1de1600f="">
            <label data-v-1de1600f="" for="email">Email

            </label>
            <input data-v-1de1600f="" type="text" id="email" placeholder="me@lolxd.com" autocomplete="off">
            <label data-v-1de1600f="" for="password">
              Contraseña
            </label>&nbsp; <i data-v-1de1600f="" class="fas fa-eye">

            </i>
            <input data-v-1de1600f="" type="password" id="password" placeholder="**********">
            <RouterLink to="/dashboard" data-v-1de1600f="" type="submit">Log in</RouterLink>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from "vue";

const email = ref("");
const hidePassword = ref(true);
const password = ref("");

const passwordFieldIcon = computed(() => hidePassword.value ? "fa-eye" : "fa-eye-slash");
const passwordFieldType = computed(() => hidePassword.value ? "password" : "text");

const doLogin = () => alert("Not implemented yet :O");
</script>

<style scoped>
* {
box-sizing: border-box;
font-family: VCR OSD Mono;
}

html,
body {
height: 100%;
margin: 0;
padding: 0;
width: 100%;
}


div#app {
width: 100%;
height: 100%;
}

div#app div#login {
align-items: center;

display: flex;
justify-content: center;
width: 100%;
height: 100%;
}

div#app div#login div#form {
background-color: #161616;
border-radius: 5px;
box-shadow: 0px 0px 30px 0px #666;
color: #ecf0f1;
width: 260px;
padding: 35px;
}

div#app div#login div#form label,
div#app div#login div#form input {
outline: none;
width: 100%;
}

div#app div#login div#form label {
color: #d5dedf;
font-size: 0.8em;
}

div#app div#login div#form input {
background-color: #613a5a;
border: none;
color: #ffffff;
font-size: 1em;
margin-bottom: 20px;
border-radius: 4px;
}

div#app div#login div#form ::placeholder {
color: #e5c7e7;
opacity: 1;
}

div#app div#login div#form button {
background-color: #a83fbd;
color: #ecf0f1;
cursor: pointer;
border: none;
padding: 10px;
transition: background-color 0.2s ease-in-out;
width: 100%;
}

div#app div#login div#form button:hover {
background-color: #eeeeee;
color: #000000;
}

@media screen and (max-width: 600px) {
div#app div#login {
align-items: unset;
background-color: unset;
display: unset;
justify-content: unset;
}

div#app div#login div#description {
margin: 0 auto;
max-width: 350px;
width: 100%;
}

div#app div#login div#form {
border-radius: unset;
box-shadow: unset;
width: 100%;
}

div#app div#login div#form form {
margin: 0 auto;
max-width: 280px;
width: 100%;
}
}
</style>