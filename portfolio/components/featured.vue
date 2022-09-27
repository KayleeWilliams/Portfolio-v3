<script setup> 
    import BiGithub from '~icons/bi/github'
    import BiYoutube from '~icons/bi/youtube'
    import BiBoxArrowUpRight from '~icons/bi/box-arrow-up-right'

    const query = await queryContent('featured/').sort({_file: -1, $numeric: true}).find()

    const position = ref({})

    query.forEach(function (item, index) { 
        const path = item._file.replace("project.md", "graphic.webp")

        if ((index & 1) == 0) {
            position.value[index] = {class: "order-first mr-[-24px]", image: `background-image: url('/content/${path}')` }
        } else {
            position.value[index] = {class: "order-last ml-[-24px]", image: `background-image: url('/content/${path}')` }
        }
    }); 

</script>

<template>
    <div class="px-32 flex flex-col h-full content-center justify-center gap-y-8"> 
            <p class="text-4xl font-bold text-center"> Featured Projects </p>
            <div class="flex flex-col gap-y-4">
                <div v-for="(project, index) in query" :key="project._path">
                    <div class="flex flex-row justify-center content-center items-center h-256" data-aos="fade-up" data-aos-delay="300" >
                        
                        <!-- Image -->
                        <div class="w-96 h-80 bg-cover bg-center rounded-lg drop-shadow-xl" :class="position[index].class" :style="position[index].image" />
                        
                        <!-- Project Info -->
                        <div class="bg-primary w-80 h-full px-6 py-8 bg-cover bg-center flex flex-col justify-between z-10 drop-shadow-xl rounded-md">

                            <!-- Top Bar -->
                            <div>
                                <div class="flex flex-row justify-between">
                                    <p class="text-xs"> {{ project.date }} </p>
                                    <div class="flex flex-row justify-center gap-2">
                                        <a v-show="project.youtube" :href="project.youtube" target="_blank">
                                            <BiYoutube class="w-6 h-6 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105  text-link hover:text-highlight " />
                                        </a>
                                        <a v-show="project.github" :href="project.github" target="_blank">
                                            <BiGithub class="w-6 h-6 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 text-link hover:text-highlight" />
                                        </a>
                                        <a v-show="project.external" :href="project.external" target="_blank">
                                            <BiBoxArrowUpRight class="w-6 h-6 transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105 text-link hover:text-highlight" />
                                        </a>
                                    </div> 
                                </div>

                                <!-- Title & Description -->
                                <p class="font-bold text-lg group-hover:underline group-hover:decoration-highlight group-hover:decoration-2 group-hover:underline-offset-4">{{ project.title }}</p>
                                <p class="text-base">{{ project.description }}</p>
                            </div>

                            <!-- Tech list -->
                            <div>
                                <br />
                                <p class="text-xs">{{ project.tech }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template> 