<template>
  <div class="gallery-container" :class="{ 'left-flex': leftFlex == true }">
    <div class="gallery-imgs">
      <template v-for="(img, index) in imgs" :key="index">
        <Transition name="img">
          <div class="gallery-item" v-show="index == currentImg">
            <div class="gallery-image">
              <img :src="`/img/${folderName}/${img}`" :alt="`Gallery image ${index}`" />
            </div>
          </div>
        </Transition>
      </template>
    </div>
    <div class="gallery-nav">
      <button
        class="gallery-btn"
        :class="{ active: ind == currentImg }"
        v-for="(item, ind) in imgs.length"
        :key="ind"
        @click="goToSlide(ind)"
      >
        <span class="sr-only">Go to image {{ ind }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const props = defineProps({
    imgs: Array,
    auto: Boolean,
    leftFlex: Boolean,
    folderName: String,
    delay: Number,
  })

  const currentImg = ref(0)

  const nextSlide = () => {
    if (currentImg.value === props.imgs.length - 1) {
      currentImg.value = 0
      return
    }
    currentImg.value += 1
  }
  const goToSlide = index => {
    currentImg.value = index
  }
  const autoPlay = () => {
    setInterval(() => {
      nextSlide()
    }, props.delay)
  }
  if (props.auto) {
    autoPlay()
  }

  //
</script>
