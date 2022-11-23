<template>
  <main class="container">
    <div class="main-content">
      <div class="main-text">
        <h1 class="main-title t-cursive">
          Welcome to<br />
          <p class="t-sans">Glow<small>&</small>Shine</p>
        </h1>
        <div class="text-bg flow">
          <p v-for="(text, ind) in dataSet.mainText" :key="ind">{{ text }}</p>
        </div>
        <router-link to="/contact" class="home-cta book-btn">Book now</router-link>
      </div>

      <MainImage />
    </div>
  </main>
</template>

<script setup>
  import { onBeforeMount, onBeforeUnmount } from 'vue'
  // import dataSet from '../assets/data.json'
  import MainImage from '../components/MainImage.vue'

  const props = defineProps({
    dataSet: Object,
  })

  onBeforeMount(() => {
    document.body.classList.add('home')
  })
  onBeforeUnmount(() => {
    document.body.classList.remove('home')
  })
</script>
