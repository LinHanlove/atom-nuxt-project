// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
  // 配置静态目录别名
    assets:'/<rootDir>/assets',
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
    },
  },
  // 导入模块
  modules: [
    '@nuxt/content',
    '@pinia/nuxt'
  ],
})
