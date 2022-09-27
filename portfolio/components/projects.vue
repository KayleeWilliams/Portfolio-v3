<script setup>
  // Import icons
  import BiGithub from '~icons/bi/github'
  import BiYoutube from '~icons/bi/youtube'
  import BiBoxArrowUpRight from '~icons/bi/box-arrow-up-right'
  // import HeroiconsOutlineExternalLink from "~icons/heroicons-outline/external-link";

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
  <div class="h-screen flex flex-col items-center justify-center gap-8"> 
    <p class="text-4xl font-bold text-center"> Other Projects </p>
    <div class="flex flex-row flex-wrap gap-4 justify-center">
        <a v-for="(project, index) in query" :key="project._path" class="group transition ease-in-out duration-300 hover:ease-in-out hover:transition hover:duration-300 hover:-translate-y-2" :href="project.github" target="_blank">
          <div v-if="show || (index <= 2)" class="w-80 h-full flex flex-col flex-shrink-0 drop-shadow-xl rounded-md bg-center bg-cover" :style="backgrounds[index].image" data-aos="fade-up" data-aos-delay="300">
            <div class="bg-primary/95 w-full h-full px-6 py-8 bg-cover bg-center flex flex-col justify-between rounded-md">

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
        </a>
    </div>

    <button v-if="!show" @click="show = true" class="bg-link px-6 py-4 drop-shadow-lg rounded-xl transition ease-in-out duration-300 hover:bg-highlight" data-aos="fade-up" data-aos-delay="500"> Show More </button>
    <button v-if="show" @click="show = false" class="bg-link px-6 py-4 drop-shadow-lg rounded-xl transition ease-in-out duration-300 hover:bg-highlight" data-aos="fade-up" data-aos-delay="500"> Show Less </button>
  </div>
</template>
