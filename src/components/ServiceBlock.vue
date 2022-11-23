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
          <div class="flex">
            <span v-for="dur in service.duration">~{{ dur }}min</span>
          </div>
          <div class="flex">
            <span v-for="price in service.price">~{{ price }}$</span>
          </div>
        </div>
        <RouterLink :to="`/services/${service.slug}`" class="btn-cta btn-info"
          >More info</RouterLink
        >
        <router-link to="/contact" class="btn-cta btn-book">Book now</router-link>
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
  import { RouterLink } from 'vue-router'

  const props = defineProps({
    service: Object,
    serviceMain: Boolean,
  })
  // console.log(props.service)
</script>
