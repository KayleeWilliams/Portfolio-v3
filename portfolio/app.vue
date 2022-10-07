<script setup>
const about = ref();
const go = () => about.value.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});

useHead({
  title: 'Kaylee Williams Portfolio',
  meta: [
    { name: 'description', content: "Hi I'm Kaylee. A software engineer. Come check out some of my cool projects!" }
  ],
  link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  bodyAttrs: {
    class: "snap-y snap-mandatory"
  }
});

</script> 

<template>
  <div class="p-4 lg:px-32 w-full h-screen text-white font-body flex flex-col gap-y-64">
    <hero @scroll="go" class="snap-center shrink-0" />
    <div ref="about"><info class="snap-center shrink-0" /></div>
    <featured class="snap-center shrink-0" /> 
    <projects class="snap-center shrink-0" />
    <contact class="snap-center shrink-0" />
  </div>
</template>
