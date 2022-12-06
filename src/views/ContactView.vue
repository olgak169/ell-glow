<template>
  <main>
    <div class="hero hero-contact"></div>
    <div class="container contact-container grid">
      <div class="map-container flex-column">
        <iframe
          frameborder="0"
          src="https://www.bing.com/maps/embed?h=500&w=700&cp=33.69572559533516~-117.81033131244317&lvl=12.69492831039916&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
          scrolling="no"
          referrerpolicy="no-referrer"
        >
        </iframe>
        <div style="white-space: nowrap; text-align: center; width: 100%; padding: 6px 0">
          <a
            id="largeMapLink"
            target="_blank"
            href="https://www.bing.com/maps?cp=33.69572559533516~-117.81033131244317&amp;sty=r&amp;lvl=12.69492831039916&amp;FORM=MBEDLD"
            >View Larger Map</a
          >
          &nbsp; | &nbsp;
          <a
            id="dirMapLink"
            target="_blank"
            href="https://www.bing.com/maps/directions?cp=33.69572559533516~-117.81033131244317&amp;sty=r&amp;lvl=12.69492831039916&amp;rtp=~pos.33.69572559533516_-117.81033131244317____&amp;FORM=MBEDLD"
            >Get Directions</a
          >
        </div>
      </div>
      <div class="details-container flex-column">
        <p>Address: ------</p>
        <p>Phone: ------</p>
        <a href="#">Instagram: ------</a>
        <a href="#">Facebook: ------</a>
      </div>
    </div>
  </main>
</template>
<script setup>
  import { onBeforeMount, onBeforeUnmount } from 'vue'

  const props = defineProps({
    dataSet: Object,
  })
  onBeforeMount(() => {
    document.body.classList.add('contact')
  })
  onBeforeUnmount(() => {
    document.body.classList.remove('contact')
  })
</script>
<style></style>
