<script setup>
    import MdiEmail from '~icons/mdi/email'
    import MdiLinkedin from '~icons/mdi/linkedin'
</script>

<template>
    <div class="h-screen w-full flex flex-col items-center justify-center">
        <h1 class="text-3xl md:text-4xl font-bold" data-aos="fade-up" data-aos-delay="200"> Contact Me </h1>
        <p class="text-2xl text-center mt-4 md:w-[27em]" data-aos="fade-up" data-aos-delay="300">Feel free to get in contact with me by Email or on Linkedin.</p> 
        <div class="flex flex-row gap-4 mt-4" data-aos="fade-up" data-aos-delay="500">
            <a href="mailto:kaylee@kayleewilliams.dev" target="_blank">
                <MdiEmail class="w-16 h-16 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300" />
            </a>

            <a href="https://www.linkedin.com/in/kaylee-williams-1559251bb" target="_blank">
                <MdiLinkedin class="w-16 h-16 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300" />
            </a>
        </div>
    </div>
</template> 