<script setup>
defineProps({
  name: {
    type: String,
    default: 'Максим Тимшин'
  },
  titleImg: {
    type: String,
    default: '/img/H1.svg'
  },
  bgImg: {
    type: String,
    default: '/img/bg-first-screen.webp'
  },
  titleImgMob: {
    type: String,
    default: '/img/h1-mob.svg'
  },
  bgImgMob: {
    type: String,
    default: '/img/bg-first-screen-mob.png'
  }
})
</script>

<template>
  <div class="first-screen">
    <h1>{{ name }}</h1>
    <img class="h1" :src="titleImg" :alt="name" />
    <img class="first-screen__bg" :src="bgImg" :alt="name" />
  </div>
  <div class="first-screen-mob">
    <h1>{{ name }}</h1>
    <img :src="titleImgMob" :alt="name" class="h1-mob" />
    <a href="#services"><img class="arrow-mob" src="/img/arrow-bottom-mob.svg" alt="Услуги" /></a>
    <img class="first-screen__bg" :src="bgImgMob" :alt="name" />
  </div>
</template>
