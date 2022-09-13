<template>
  <header>
    <div class="header-container container">
      <IconLogo />
      <div class="menu-btns" v-if="menuBtns">
        <button class="menu-open-btn" v-show="!menuOpen" @click="menuOpen = true">
          <IconMenu />
          <span class="sr-only">Open menu</span>
        </button>
        <button class="menu-close-btn" v-show="menuOpen" @click="menuOpen = false">
          <IconClose />
          <span class="sr-only">Close menu</span>
        </button>
      </div>
      <Transition name="nav-open">
        <nav :class="{ expanded: menuOpen }" class="main-nav" v-if="menuOpen">
          <ul>
            <li><RouterLink to="/services" class="nav-link">Services</RouterLink></li>
            <li><RouterLink to="/about" class="nav-link">About</RouterLink></li>
            <li><RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
          </ul>
          <div class="nav-btns">
            <a href="tel:+" class="nav-btn-link">Call now</a>
            <a href="https://wa.me/+" class="nav-btn-link">WhatsApp</a>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>

<script setup>
  import { onMounted, ref, watch } from 'vue'
  import { RouterLink, useRoute } from 'vue-router'
  import IconLogo from './icons/IconLogo.vue'
  import IconMenu from './icons/IconMenu.vue'
  import IconClose from './icons/IconClose.vue'
  const menuBtns = ref(true)
  const menuOpen = ref(false)
  const medBreakPoint = 720

  const route = useRoute()

  watch(route, () => {
    if (window.innerWidth < medBreakPoint) {
      menuOpen.value = false
    }
  })

  onMounted(() => {
    if (window.innerWidth > medBreakPoint) {
      menuOpen.value = true
      menuBtns.value = false
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > medBreakPoint) {
        menuOpen.value = true
        menuBtns.value = false
      } else {
        menuOpen.value = false
        menuBtns.value = true
      }
    })
  })
</script>
