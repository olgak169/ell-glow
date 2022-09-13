<script setup>
  import { RouterView } from 'vue-router'
  import HeaderComp from './components/HeaderComp.vue'
</script>

<template>
  <HeaderComp />
  <RouterView v-slot="{ Component }">
    <Transition name="page">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
