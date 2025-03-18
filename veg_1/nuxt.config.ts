// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";


export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/image"],
  site: {
    url: "https://dazzling-torte-e51608.netlify.app",
    trailingSlash: true,
    excludeAppSources: true,
    name: "Egészséges Élet",
    description: "Majdnem vegán receptek",
    defaultLocale: "hu", // not needed if you have @nuxtjs/i18n installed
  },
});