<template>
  <main>
    <div class="hero hero-about">
      <h1 class="t-cursive">About us</h1>
    </div>

    <section class="about-section container">
      <div class="about-text t-serif">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias culpa omnis
          eveniet nihil nemo? Iste, quaerat! Quam voluptatum nam nulla ipsum sit
          voluptates accusamus, sint, officia, deserunt vero amet minima a pariatur
          labore! Impedit rerum accusantium, odit illo facilis itaque consequuntur aliquam
          odio eos deserunt expedita ad non laboriosam dolorum cum ipsam cumque ullam
          culpa! Similique modi adipisci rem odio?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, tenetur.
          Exercitationem pariatur a est quos? Non, aliquid veritatis optio laudantium
          similique voluptatum vitae deserunt rerum? Aspernatur sunt dicta, cumque
          repudiandae voluptatem aut voluptatum incidunt eius quos dolores. Perferendis,
          mollitia, ad iusto nostrum officiis dignissimos corrupti dicta id suscipit iure
          accusantium!
        </p>
      </div>

      <ImageGallery
        :imgs="aboutImgs"
        :auto="true"
        :leftFlex="true"
        :folderName="'about'"
        :delay="5000"
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
        :imgs="locationImgs"
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
  import dataSet from '../assets/data.json'
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  const reviews = ref(null)
  const reviewSet = ref(null)

  const locationImgs = dataSet.locationGallery
  const aboutImgs = dataSet.aboutGallery

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
    reviews.value = dataSet.reviews
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
