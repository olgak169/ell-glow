<template>
  <div class="service-block">
    <div class="service-img" :class="{ light: service.background === 'light' }">
      <img :src="`/img/services/${service.img}`" alt="" />
    </div>
    <article class="service-description service-main" v-if="serviceMain">
      <h2 class="service-name">{{ service.name }}</h2>
      <p>
        {{ service.description }}
      </p>
      <h3>Benefits</h3>
      <ul>
        <li v-for="(name, index) in service.benefits" :key="index">{{ name }}</li>
      </ul>
      <div class="service-details">
        <div>
          <p>~ {{ service.duration }}min</p>
          <p>~ {{ service.price }}$</p>
        </div>
        <router-link to="/contact" class="service-book-btn t-sans book-btn"
          >Book now</router-link
        >
      </div>
    </article>
    <div class="service-description addon-container" v-else>
      <div class="addon">
        <h2 class="service-name">{{ service.content[0].name }}</h2>
        <p>{{ service.content[0].description }}</p>
        <p>~ {{ service.content[0].price }}$</p>
      </div>
      <div class="addon">
        <h2 class="service-name">{{ service.content[1].name }}</h2>
        <p>{{ service.content[1].description }}</p>
        <p>~ {{ service.content[1].price }}$</p>
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    service: Object,
    serviceMain: Boolean,
  })
</script>
