<template>
  <main>
    <div class="hero hero-services-details flow">
      <h1>{{ data.name }}</h1>
      <ul>
        <li v-for="(ind, item) in data.benefits" :key="ind">{{ (item, ind) }}</li>
      </ul>
      <router-link to="/contact" class="btn-cta">Book now</router-link>
    </div>
    <div class="container-service-details flex-column">
      <img :src="`/img/services/${data.img}`" :alt="data.name" />
      <h2 v-if="data.process.length">Process: {{ data.process[0] }}</h2>
      <p>{{ data.description }}</p>
      <div class="detail-more-info flow">
        <p v-for="item in data.moreInfo">{{ item }}</p>
      </div>
      <div class="details-add-info flow">
        <p>
          Price:
          <span v-for="(item, ind) in data.price" :key="ind"> ${{ item }} </span>
        </p>
        <p>
          Duration:
          <span v-for="(item, ind) in data.duration" :key="ind">{{ item }}min </span>
        </p>
        <h3 v-if="data.packageInfo.length">
          Packages available:
          <p v-for="(item, ind) in data.packageInfo" :key="ind">{{ item }}</p>
        </h3>
      </div>

      <RouterLink to="/services" class="btn-back">Back to services</RouterLink>
    </div>
  </main>
</template>
<script setup>
  import { useRoute } from 'vue-router'

  const props = defineProps({
    dataSet: Object,
  })
  const route = useRoute()

  const data = props.dataSet.services.find(x => x.slug == route.params.slug)
</script>
