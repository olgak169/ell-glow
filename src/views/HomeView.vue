<template>
  <main class="main-page">
    <div class="main-content container">
      <div class="main-text">
        <h1 class="main-title t-cursive">
          Welcome to
          <p class="t-sans"><span>Glow</span><small>&</small><span>Shine</span></p>
        </h1>
        <div class="text-bg">
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
  import dataSet from '../assets/data.json'
  import MainImage from '../components/MainImage.vue'

  onBeforeMount(() => {
    document.body.classList.add('home')
  })
  onBeforeUnmount(() => {
    document.body.classList.remove('home')
  })
</script>
