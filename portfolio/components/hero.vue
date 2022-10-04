<script setup>
    import MdiArrowDownThinCircleOutline from '~icons/mdi/arrow-down-thin-circle-outline'
</script>


<template>
    <div class="h-screen flex flex-row gap-32 items-center justify-center ">
        <div class="flex flex-col"> 
            <p class="font-bold text-left text-9xl leading-none" data-aos="fade-up" data-aos-delay="300"> Kaylee <br> Williams </p>
            <p class="font-bold text-left text-6xl leading-none" data-aos="fade-up" data-aos-delay="400"> Software Engineer </p>
        </div>
        <button @click="$emit('scroll')" class="text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 animate-bounce"><MdiArrowDownThinCircleOutline class="w-48 h-48" data-aos="fade-up" data-aos-delay="700" /></button>
    </div>
</template>