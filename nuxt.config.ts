// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  css: ["@/assets/stylesheets/all.scss"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/eslint"],
});
