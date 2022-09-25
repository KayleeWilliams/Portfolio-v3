// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'unplugin-icons/nuxt'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
//   plugins: [
//     { src: "@/plugins/aos", ssr: false, mode: "client" },
//   ],
  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  }
})
