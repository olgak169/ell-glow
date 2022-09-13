<template>
  <main>
    <div class="hero hero-services">
      <h1 class="t-cursive">Services</h1>
      <p>
        All procedures are done with high quality products available for purchase. Please
        book in advance.
      </p>
      <router-link to="/contact" class="service-cta book-btn">Book now</router-link>
    </div>

    <ScrollTitle :title="'Face'" :color="0" />
    <article class="section-description t-serif">
      <p>
        Designed with both men and women in mind, EllGlow is a place where you can put
        your skin and body needs first in the trusted hands of our experienced laser and
        skin specialists.
      </p>
      <p>At EllGlow we offer:</p>
      <h5>~Facial treaments</h5>
      <p>Rejuvenate your skin with our personalised skin treatments.</p>
      <h5>~Chemical peels</h5>
      <p>Stimulates the production of collagen to create smooth and healthy skin.</p>
      <h5>~Cosmetic injectables</h5>
      <p>
        Ageing is a natural process, however we can keep you looking youthful with our
        injectables.
      </p>
    </article>
    <section class="service-section container">
      <ServiceBlock
        v-for="(service, ind) in dataSet['services']"
        :key="ind"
        :service="service"
        :serviceMain="true"
      />
    </section>
    <ScrollTitle :title="'Addons'" :color="1" />
    <article class="section-description t-serif">
      <p>Add something special to your experience.</p>
    </article>
    <section class="addon-section container">
      <ServiceBlock
        v-for="(addon, ind) in dataSet['addons']"
        :key="ind"
        :service="addon"
        :serviceMain="false"
      />
    </section>
    <ScrollTitle :title="'Other'" :color="2" />
    <article class="section-description t-serif">
      <p>Other services we offer. Call for consultation and available times.</p>
    </article>
  </main>
</template>
<script setup>
  import { onMounted } from 'vue'
  import ScrollTitle from '../components/ScrollTitle.vue'
  import dataSet from '../assets/data.json'
  import ServiceBlock from '../components/ServiceBlock.vue'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import gsap from 'gsap'

  gsap.registerPlugin(ScrollTrigger)

  onMounted(() => {
    const content = gsap.utils.toArray('.service-description')

    content.forEach(item => {
      const anim = gsap.from(item, { opacity: 0, yPercent: -20, paused: true })

      ScrollTrigger.create({
        trigger: item,
        start: 'top bottom',
        scrab: 0.5,
        onEnter: () => anim.play(),
      })
    })
  })
</script>
