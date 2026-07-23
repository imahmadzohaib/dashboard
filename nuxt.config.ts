// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/icon'],
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'vue-chartjs',
        'chart.js/auto',
      ]
    }
  },
  css: [
    '~/assets/css/main.css'
  ],
  nitro: {
    preset: 'netlify'
  }
})