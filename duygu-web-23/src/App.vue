<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Headerr from './components/Headerr.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Headerr></Headerr>
        <RouterLink to="/"></RouterLink>
  <RouterView />
  <Footer></Footer>
</template>

<style>
 RouteView {
   width: 100%;
 }
</style>



<style >
@import "./assets/KzStyle/Style.css";
</style>
