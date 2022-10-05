<script setup>
  // Import icons
  import BiGithub from '~icons/bi/github'
  import BiYoutube from '~icons/bi/youtube'
  import BiBoxArrowUpRight from '~icons/bi/box-arrow-up-right'

  let show = ref(false)

  // Get projects
  const query = await queryContent('projects/').sort({_file: -1, $numeric: true}).find()
  
  const backgrounds = ref({})

  query.forEach(function (item, index) {
    const path = item._file.replace("project.md", "graphic.webp")
    backgrounds.value[index] = { image: `background-image: url('/content/${path}')` }
  });
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-8 py-20 lg:py-40"> 
    <p class="text-3xl md:text-4xl font-bold text-center" data-aos="fade-up" data-aos-delay="200"> Other Projects </p>
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-4 justify-center"> 
        <a v-for="(project, index) in query" :key="project._path" class="group transition ease-in-out duration-300 hover:ease-in-out hover:transition hover:duration-300 hover:-translate-y-2" :href="project.github" target="_blank">
          <div v-if="show || (index <= 2)" class="w-80 h-full flex flex-col flex-shrink-0 drop-shadow-xl rounded-lg bg-center bg-cover" data-aos="fade-up" data-aos-delay="300">
            
            <!-- Can add images here later? -->
            <div class="bg-primary w-full h-full px-6 py-8 bg-cover bg-center flex flex-col justify-between rounded-lg"> 

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
                <p class="font-bold text-xl group-hover:underline group-hover:decoration-pink-900 group-hover:decoration-[3px] group-hover:underline-offset-[6px]">{{ project.title }}</p>
                <p class="text-base mt-1">{{ project.description }}</p>
                </div>

                <!-- Tech list -->
                <div>
                  <p class="text-xs text-purple-200 mt-4">{{ project.tech }}</p>
                </div>
              </div>
            </div>
        </a>
    </div>

    <button v-if="!show" @click="show = true" class="bg-gradient-to-tr from-pink-500 to-pink-700 hover:bg-none hover:bg-pink-900 text-pink-200 font-semibold px-6 py-4 drop-shadow-lg rounded-full transition ease-in-out duration-300" data-aos="fade-up" data-aos-delay="500"> Show More </button>
    <button v-if="show" @click="show = false" class="bg-gradient-to-tr from-pink-500 to-pink-700 hover:bg-none hover:bg-pink-900 text-pink-200 font-semibold px-6 py-4 drop-shadow-lg rounded-full transition ease-in-out duration-300" data-aos="fade-up" data-aos-delay="500"> Show Less </button>
  </div>
</template>
