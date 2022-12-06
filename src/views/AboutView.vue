<template>
  <main>
    <div class="hero hero-about">
      <video
        playsinline
        autoplay="true"
        muted
        loop
        :src="'./img/about/bg-video.mp4'"
        type="video/mp4"
      ></video>
      <div class="hero-overlay"></div>
    </div>

    <section class="about-section container">
      <div class="t-serif flow">
        <h1>About Ell Glow</h1>
        <p>
          Ell Glow Beauty is a European skin and hair studio in Orange County that offers
          a full range of services for your beauty needs. Our contemporary and tranquil
          atmosphere offers all the amenities you could desire, from peaceful surroundings
          to state-of-the-art equipment. Immerse yourself in a world of comfort and
          convenience, where you can relax and enjoy the best of what modern technology
          has to offer.
        </p>
        <p>
          Elle Rice founded Ell Glow, a boutique beauty studio, with the mission of giving
          each of her clients the best experience possible. As a problem solver for
          difficult skin and hair issues, Elle's attention to detail makes sure every
          client looks and feels their absolute best. Each day our team works passionately
          to ensure we deliver only the latest, safest and proven innovative technology
          and products that are unique and appropriate for our clients.
        </p>
        <p>
          The Ell Glow philosophy is built on understanding individual client needs and
          creating a personalized care plan to achieve the target results.
        </p>
        <p>
          We offer a full range of complimentary services and treatments. Our goal is to
          help our clients achieve the very best skin and hair they can. Whether it be
          repairing damaged skin or simply maintaining already healthy skin and preventing
          premature aging, we invite you to schedule a complimentary consultation with us
          today!
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
