<template>
  <main class="container">
    <div class="main-content grid">
      <div class="main-content__text flex-column">
        <h1 class="main-title t-cursive">
          Welcome to<br />
          <p class="t-sans">Glow<small>&</small>Shine</p>
        </h1>
        <div class="main-text flow">
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
