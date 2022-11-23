<template>
  <main>
    <div class="hero hero-about">
      <h1 class="t-cursive">About us</h1>
    </div>

    <section class="about-section container">
      <div class="t-serif flow">
        <p>
          Ell Glow Beauty is a Unique European Skin & Hair Studio in Orange County that
          covers all your beauty needs. Your Journey start as you step into our relaxing
          and cozy atmosphere built with you in mind.
        </p>
        <p>
          EllGlow was established by Elle Rice, who is passionate about her custumers to
          give each of her clients a best experience. As a problem solver for difficult
          Skin and Hair, Elle`s attention to details makes sure every client looks and
          feels their absolute Best.
        </p>
        <p>
          At the core of the Ell Glow philosophy is understanding the individual
          requirements of each clients and constructing a personal,caring approach to
          achieve targeting result. Each day our team works passionately to ensure we
          deliver to you only the latest,safest,proven innovative technology and products
          that are unique and appropriate for our clients. Booking your complementary
          consultation and start seeing the result you desire.
        </p>
        <p>
          We offer a full range of complimenting service and treatments. Our goal is to
          help our clients achieve the very best Skin and Hair they can. Whether it be
          repairing damaged skin or simply maintaining already healthy Skin and prevent
          the effects of premature Aging.
        </p>
      </div>

      <ImageGallery
        :imgs="dataSet.aboutGallery"
        :auto="false"
        :leftFlex="true"
        :folderName="'about'"
        :delay="10000"
      />
    </section>
    <ScrollTitle :title="'Reviews'" :color="0" />
    <div class="reviews-container container">
      <div class="review t-serif" v-for="(review, ind) in reviewSet" :key="review.id">
        <p :class="{ change: changing == true }">{{ review.text }}</p>
      </div>
    </div>
    <ScrollTitle :title="'Location'" :color="1" />
    <div class="about-location-container container">
      <ImageGallery
        :imgs="dataSet.locationGallery"
        :auto="false"
        :leftFlex="false"
        :folderName="'about'"
        :delay="8000"
      />
    </div>
    <footer class="t-cursive">Come visit us soon!</footer>
  </main>
</template>

<script setup>
  import ScrollTitle from '../components/ScrollTitle.vue'
  import ImageGallery from '../components/ImageGallery.vue'
  // import dataSet from '../assets/data.json'
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const props = defineProps({
    dataSet: Object,
  })

  const reviews = ref(null)
  const reviewSet = ref(null)

  const changing = ref(false)

  const timer = ref(null)
  let index = 3

  const reviewChange = () => {
    changing.value = true
    reviewSet.value.shift()

    if (index >= reviews.value.length) {
      index = 0
    }
    reviewSet.value.push(reviews.value[index])
    index++
    setTimeout(() => {
      changing.value = false
    }, 500)
  }

  onMounted(() => {
    reviews.value = props.dataSet.reviews
    reviewSet.value = reviews.value.slice(0, 3)

    timer.value = setInterval(() => {
      reviewChange()
    }, 20000)
  })
  onBeforeUnmount(() => {
    clearInterval(timer.value)
  })

  //
</script>
