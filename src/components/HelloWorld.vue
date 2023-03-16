<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      01000100 01101001 01110011 01100011 
      01110101 01101100 01110000 01100101 
      00100000 01101100 01100001 01110011
      00100000 01101101 01101111 01101100 
      01100101 01110011 01110100 01101001 
      01100001 01110011
    </h3>
  </div>
</template>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.5rem;
  top: -10px;
}

h3 {
  font-size: 1rem;
  color: #FFFFFF;
  font-family: VCR OSD Mono;
  
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
