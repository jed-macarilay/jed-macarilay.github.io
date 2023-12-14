<template>
  <v-container class="fill-height">
    <Home />

    <About />

    <Experience />
  </v-container>
</template>

<script setup>
  import Home from '@/components/Home.vue'
  import About from '@/components/About.vue'
  import Experience from '@/components/Experience.vue'
</script>

<style>
* {
    color: #000;
  }
</style>