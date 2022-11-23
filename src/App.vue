<script setup>
  import { RouterView } from 'vue-router'
  import HeaderComp from './components/HeaderComp.vue'
  import dataSet from './assets/data.json'
</script>

<template>
  <HeaderComp />
  <RouterView v-slot="{ Component }">
    <Transition name="page">
      <component :is="Component" :dataSet="dataSet" />
    </Transition>
  </RouterView>
</template>
