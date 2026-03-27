<script setup>
defineProps({
  title: {
    type: String,
    default: 'Кейсы'
  },
  cases: {
    type: Array,
    default: () => []
  }
})

const openModal = (id) => {
  if (typeof window !== 'undefined' && window.openModal) {
    window.openModal(id)
  }
}
</script>

<template>
  <div class="stripe"></div>
  <div class="cases" id="cases">
    <h2>{{ title }}</h2>
    <ul class="cases_list">
      <li v-for="(item, index) in cases" :key="index">
        <div v-if="item.modalId" class="cases_list__item" role="button" @click="openModal(item.modalId)">
          <div class="cases_list__item_block1">
            <p v-for="(line, lIndex) in item.titleLines" :key="lIndex"><span>{{ line }}</span></p>
          </div>
          <div class="cases_list__item_img1">
            <img class="cases_list__item_img_1 lazyImg" :data-src="item.img1" :alt="item.alt1" />
            <img class="cases_list__item_img_2 lazyImg" :data-src="item.img2" :alt="item.alt2" />
          </div>
        </div>
        <a v-else :href="item.url || '#'" class="cases_list__item">
          <div v-if="item.titleLines && index < 2" class="cases_list__item_block1">
             <p v-for="(line, lIndex) in item.titleLines" :key="lIndex"><span>{{ line }}</span></p>
          </div>
          <div class="cases_list__item_img1">
            <picture v-if="item.webp1">
              <source class="lazyImg" :data-src="item.webp1" type="image/webp" />
              <img class="cases_list__item_img_1 lazyImg" :data-src="item.img1" :alt="item.alt1" />
            </picture>
            <img v-else class="cases_list__item_img_1 lazyImg" :data-src="item.img1" :alt="item.alt1" />
            
            <picture v-if="item.webp2">
              <source class="lazyImg" :data-src="item.webp2" type="image/webp" />
              <img class="cases_list__item_img_2 lazyImg" :data-src="item.img2" :alt="item.alt2" />
            </picture>
            <img v-else class="cases_list__item_img_2 lazyImg" :data-src="item.img2" :alt="item.alt2" />
          </div>
          <div v-if="item.titleLines && index >= 2" class="cases_list__item_block1">
             <p v-for="(line, lIndex) in item.titleLines" :key="lIndex"><span>{{ line }}</span></p>
          </div>
        </a>
      </li>
    </ul>
    
    <!-- Mobile list -->
    <ul class="cases_list-mob">
      <li v-for="(item, index) in cases" :key="'mob-' + index">
        <div v-if="item.modalId" class="cases_list-mob_item" role="button" @click="openModal(item.modalId)">
          <h3>{{ item.mobTitle || item.titleLines?.join(' ') }}</h3>
          <picture>
            <source class="lazyImg" :data-src="item.mobWebp || item.webp1" type="image/webp" />
            <img class="lazyImg" :data-src="item.mobImg || item.img1" alt="скрин" />
          </picture>
        </div>
        <a v-else class="cases_list-mob_item" :href="item.url || '#'">
          <h3>{{ item.mobTitle || item.titleLines?.join(' ') }}</h3>
          <picture>
            <source class="lazyImg" :data-src="item.mobWebp || item.webp1" type="image/webp" />
            <img class="lazyImg" :data-src="item.mobImg || item.img1" alt="скрин" />
          </picture>
        </a>
      </li>
    </ul>
  </div>
</template>
