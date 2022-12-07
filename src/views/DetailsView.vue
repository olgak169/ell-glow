<template>
  <main>
    <div class="hero hero-services-details flow">
      <h1 class="display-title-light">{{ data.name }}</h1>
      <ul>
        <li v-for="(ind, item) in data.benefits" :key="ind">{{ (item, ind) }}</li>
      </ul>
      <router-link to="/contact" class="btn-cta">Book now</router-link>
    </div>
    <div class="container-service-details flex-column">
      <img :src="`./img/services/${data.img}`" :alt="`${data.name} at EllGlow image `" />
      <h2 class="details-process" v-if="data.process.length">
        Process: {{ data.process[0] }}
      </h2>
      <p class="t-serif">{{ data.description }}</p>
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

      <button @click="$router.back()" class="btn-back">&#8617; Back to services</button>
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
