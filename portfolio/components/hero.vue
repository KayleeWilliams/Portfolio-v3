<script setup>
    import MdiArrowDownThinCircleOutline from '~icons/mdi/arrow-down-thin-circle-outline'
</script>


<template>
    <div class="h-screen flex flex-col gap-8 md:gap-12 lg:flex-row lg:gap-32 items-center justify-center ">
        <div class="flex flex-col"> 
            <p class="font-bold text-left pb-2 text-6xl  md:text-9xl leading-tight" data-aos="fade-up" data-aos-delay="300"> Kaylee <br> Williams </p>
            <p class="font-bold text-left text-4xl md:text-6xl leading-none bg-clip-text bg-gradient-to-tr from-pink-500 to-pink-700 text-transparent w-full pb-8 whitespace-nowrap" data-aos="fade-up" data-aos-delay="400"> Software Engineer </p>
        </div>
        <button @click="$emit('scroll')" class="text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 animate-bounce"><MdiArrowDownThinCircleOutline class="w-24 h-24 lg:w-48 lg:h-48" data-aos="fade-up" data-aos-delay="700" /></button>
    </div>
</template>