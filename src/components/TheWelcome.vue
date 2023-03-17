<script setup>
import WelcomeItem from './WelcomeItem.vue'
import WrongIcon from './New Icons/TrashIcon.vue'
</script>

<template>
 

  <WelcomeItem>
    <template #icon>
      <WrongIcon />
    </template>
    <template #heading>???</template>
    01101000 01101111 01101100 01100001
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <WrongIcon />
    </template>
    <template #heading>???</template>

    01110100 01100101 01101110 00100000 01110101 
    01101110 00100000 01100010 01110101 01100101 
    01101110 00100000 01100100 01101001 01100001
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <WrongIcon />
    </template>
    <template #heading>???</template>
    01010011 01101001 00100000 01101001 01101110 01110100 01100101 01101110 01110100 01100001 
    01110011 00100000 01100100 01100101 01110011 01100011 01101001 01100110 01110010 01100001 
    01110010 00100000 01100101 01110011 01110100 01101111 00100000 01110100 01100101 00100000 
    01101000 01100001 01100011 01100101 01101101 01101111 01110011 00100000 01100001 01100100 
    01101101 01101001 01101110 <RouterLink to="/dashboard">Dashboard</RouterLink>
  </WelcomeItem>

</template>
