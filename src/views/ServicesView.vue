<template>
  <main>
    <div class="hero hero-services">
      <h1 class="t-cursive">Services</h1>
      <p>
        Our busy holiday season is upon us. We welcome new and returning clients to
        schedule their appointments now!
      </p>
      <router-link to="/contact" class="btn-cta service-hero-cta">Book now</router-link>
    </div>

    <ScrollTitle :title="'Face'" :color="0" />
    <article class="section-description t-serif">
      <p>
        As the premier provider of laser- and light-based skin-rejuvenation technologies,
        we have the tools, experience, and talent to help you look and feel your best.
      </p>
      <p>At Ell Glow we offer:</p>
      <h5>&#10038; Facial treaments</h5>
      <p>Rejuvenate your skin with our personalised skin treatments.</p>
      <h5>&#10038; Chemical peels</h5>
      <p>Stimulates the production of collagen to create smooth and healthy skin.</p>
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
      <p>Let's add a little something extra to your experience!</p>
      <p>
        Get an additional mini treatment with your main one to get even more benefits.
      </p>
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
      <p>Here at Ell Glow we have a lot more to offer!</p>
      <p>Check out other services that our clients enjoy.</p>
      <p>Call us to see what services are available to book.</p>
    </article>
    <section class="other-section container">
      <ServiceBlock
        v-for="(item, ind) in dataSet['other']"
        :key="ind"
        :service="item"
        :serviceMain="true"
      />
    </section>
    <footer class="t-cursive">Come visit us soon!</footer>
    <button class="btn-up" @click.stop="toTop" v-if="btnTopShow">to top</button>
  </main>
</template>
<script setup>
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import ScrollTitle from '../components/ScrollTitle.vue'
  // import dataSet from '../assets/data.json'
  import ServiceBlock from '../components/ServiceBlock.vue'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import gsap from 'gsap'

  const props = defineProps({
    dataSet: Object,
  })
  const btnTopShow = ref(false)
  // const anim = ref(null)
  // const content = ref(null)

  gsap.registerPlugin(ScrollTrigger)

  const scrollAnim = () => {
    const content = gsap.utils.toArray('.service-main')
    content.forEach(item => {
      gsap.from(item.children, {
        scale: 0.8,
        opacity: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: '20% center',
          end: '+=400',
        },
        immediateRender: false,
      })
    })
  }

  const toTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  const showBtn = () => {
    btnTopShow.value = window.scrollY > 900
  }
  onMounted(() => {
    window.addEventListener('scroll', showBtn)
    scrollAnim()
  })
  onBeforeUnmount(() => {
    // anim.value.kill()
    window.removeEventListener('scroll', showBtn)
  })
</script>
