<script setup>
const about = ref();
const go = () => about.value.scrollIntoView({behavior: "smooth"});

useHead({
  bodyAttrs: {
    class: "snap-y snap-mandatory"
  }
});

</script> 

<template>
  <div class="px-32 w-full h-screen text-white font-body flex flex-col gap-y-64">
    <hero @scroll="go" class="snap-center shrink-0" />
    <div ref="about"><info class="snap-center shrink-0" /></div>
    <featured class="snap-center shrink-0" />
    <projects class="snap-center shrink-0" />
  </div>
</template>
