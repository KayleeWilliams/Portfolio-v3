<script setup> 
    import BiGithub from '~icons/bi/github'
    import BiYoutube from '~icons/bi/youtube'
    import BiBoxArrowUpRight from '~icons/bi/box-arrow-up-right'

    const query = await queryContent('featured/').sort({_file: -1, $numeric: true}).find()

    const position = ref({})

    query.forEach(function (item, index) { 
        const path = item._file.replace("project.md", "graphic.webp")

        if ((index & 1) == 0) {
            position.value[index] = {class: "order-last md:ml-[-24px]", image: `/content/${path}`, delay: 300}
        } else {
            position.value[index] = {class: "order-first md:mr-[-24px]", image: `/content/${path}`, delay: 400}
        }
    }); 

</script>

<template>
    <div class="flex flex-col h-full content-center justify-center gap-y-8"> 
            <p class="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up" data-aos-delay="200"> Featured Projects </p>
            <div class="flex flex-col gap-y-4">
                <div v-for="(project, index) in query" :key="project._path">
                    <div class="flex flex-row justify-center content-center items-center" data-aos="fade-up" :data-aos-delay="position[index].delay" >
                        
                        <!-- Image -->
                        <div class="w-0 h-0 md:w-96 md:h-80 bg-purple-700 opacity-60 hover:opacity-100 transistion ease-in-out duration-500 rounded-lg shrink-0 drop-shadow-xl" :class="position[index].class" > 
                            <a :href="project.github" target="_blank"> 
                                <img class="w-full h-full object-cover opacity-100 rounded-lg" :src="position[index].image" :alt="project.title"/> 
                            </a>
                        </div> 

                        <!-- Project Info -->
                        <div class="bg-primary w-80 md:w-96 h-full px-6 py-8 bg-cover bg-center flex flex-col justify-between z-10 drop-shadow-xl rounded-lg shrink-0">

                            <!-- Top Bar -->
                            <div>
                                <div class="flex flex-row items-baseline justify-between mb-2">
                                <p class="text-base"> {{ project.date }} </p>
                                <div class="flex flex-row justify-center gap-2">
                                    <a v-show="project.youtube" :href="project.youtube" target="_blank">
                                        <BiYoutube class="w-6 h-6 text-pink-600 hover:text-pink-900 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105" />
                                    </a>
                                    <a v-show="project.github" :href="project.github" target="_blank">
                                        <BiGithub class="w-6 h-6 text-pink-600 hover:text-pink-900 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105" />
                                    </a>
                                    <a v-show="project.external" :href="project.external" target="_blank">
                                        <BiBoxArrowUpRight class="w-6 h-6 text-pink-600 hover:text-pink-900 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105" />
                                    </a>
                                </div> 
                            </div>

                                <!-- Title & Description -->
                                <p class="font-bold text-xl md:text-2xl">{{ project.title }}</p>
                                <p class="text-base mt-1">{{ project.description }}</p>
                            </div>

                            <!-- Tech list -->
                            <div>
                                <p class="text-xs md:text-base text-purple-200 mt-4">{{ project.tech }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template> 