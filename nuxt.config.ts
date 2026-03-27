// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  experimental: {
    appManifest: false
  },
  app: {
    head: {
      title: 'Максим Тимшин — Проводник в мир интерфейсов',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#0A0A0A' },
        { name: 'msapplication-TileColor', content: '#da532c' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' }
      ],
      script: [
        { src: '/js/swiper-bundle.min.js', defer: true },
        { src: '/js/lenis.min.js', defer: true },
        { src: '/js/scroll-lock.min.js', defer: true },
        { src: '/js/main.js', defer: true }
      ]
    }
  },
  modules: [
    '@nuxthq/studio',
    '@nuxt/content'
  ],
  css: [
    '~/assets/css/style.css'
  ]
})