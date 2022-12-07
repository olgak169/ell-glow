<template>
  <div class="scroll-title">
    <p :id="`scrollingText-${title}`" aria-hidden="true">
      <span v-for="count in counter" :key="count">{{ title }}</span>
    </p>
  </div>
</template>
<script setup>
  import gsap from 'gsap'
  import ScrollTrigger from 'gsap/ScrollTrigger'
  import { onBeforeUnmount, onMounted, ref } from 'vue'

  gsap.registerPlugin(ScrollTrigger)
  const props = defineProps({
    title: String,
    color: Number,
  })

  const size = ref(0)
  const counter = ref(0)

  const tl = gsap.timeline()

  const colors = [
    {
      bg: '#ff5a96',
      font: '#ff1269',
    },
    {
      bg: '#fc90b7',
      font: '#de5a8a',
    },
    {
      bg: '#c6255a',
      font: '#ff5392',
    },
  ]
  const resize = () => {
    size.value = window.innerWidth
    counter.value = Math.round(size.value / 75 + 5)
  }

  onMounted(() => {
    window.addEventListener('resize', resize)
    size.value = window.innerWidth
    counter.value = Math.round(size.value / 75 + 5)

    tl.to(`#scrollingText-${props.title}`, {
      xPercent: -30,
      scrollTrigger: {
        trigger: `#scrollingText-${props.title}`,
        scrub: 1,
      },
    })
  })
  onBeforeUnmount(() => {
    tl.revert()
    window.removeEventListener('resize', resize)
  })
  //
</script>

<style lang="scss">
  .scroll-title {
    margin: 2rem 0;
    width: 100%;
    overflow: hidden;
    background-color: v-bind('colors[props.color].bg');
    // background-color: #c6255a;
    span {
      font-size: var(--fs-lg);
      font-weight: 300;
      color: v-bind('colors[props.color].font');
      // color: #ff5392;
      &:nth-of-type(even) {
        font-weight: bold;
      }
    }
  }
</style>
