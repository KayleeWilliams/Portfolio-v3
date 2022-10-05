import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.AOS = new AOS.init({ 
    // offset: 200,
    duration: 600,
    easing: 'ease-in-out-cubic',
    once: true,
  });
});