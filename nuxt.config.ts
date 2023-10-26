// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/svg', href: '/perfect-logo-1.svg' }]
    }
},
  modules: ['nuxt-icon', '@vueuse/nuxt', 'floating-vue/nuxt'],
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
})
