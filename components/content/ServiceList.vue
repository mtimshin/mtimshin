<script setup>
defineProps({
  title: {
    type: String,
    default: 'Услуги'
  },
  subtitle: {
    type: String,
    default: 'Более 10 лет опыта'
  },
  services: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <div class="services" id="services">
    <div class="services_heading">
      <h2>{{ title }}</h2>
      <p class="services_heading__p">{{ subtitle }}</p>
    </div>
    <ul class="services_list">
      <li v-for="(item, index) in services" :key="index" class="services_list__item">
        <div v-if="index === 0" class="services_list__item_stripe"></div>
        <div class="services_list__item_cont">
          <div class="services_list__item_block">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="services_list__item_block">
            <p>{{ item.description }}</p>
          </div>
        </div>
        <div class="services_list__item_stripe"></div>
        <div class="services_list__item__link">
          <a :href="item.link1Url || '#cases'" class="btn">{{ item.link1Text || 'Смотреть кейсы' }}</a>
          <a :href="item.link2Url || '/price'" target="_blank" class="btn">{{ item.link2Text || 'Цены' }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>
