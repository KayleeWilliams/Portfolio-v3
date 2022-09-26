<script setup>
  // Import icons
  import BiGithub from '~icons/bi/github'
  import BiYoutube from '~icons/bi/youtube'
  import BiBoxArrowUpRight from '~icons/bi/box-arrow-up-right'
  // import HeroiconsOutlineExternalLink from "~icons/heroicons-outline/external-link";

  let show = ref(false)

// Get projects
  const query = await queryContent('projects/').sort({_file: -1, $numeric: true}).find()
  // console.log(query)

  // const backgrounds = []
  const backgrounds = ref([])
  query.forEach(function (item, index) {
    const path = item._file.replace("project.md", "image.webp")
    backgrounds.value.push(`bg-[url('/content/${path}')]`)
  });

  // console.log(backgrounds)
  // console.log(backgrounds.value[0])
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center gap-8"> 
    <p class="text-4xl font-bold text-center"> Other Projects </p>
    <div class="flex flex-row flex-wrap gap-2 justify-center">
        <div v-for="(project, index) in query" :key="project._path">
          <div v-if="show || (index <= 2)" data-aos="fade-up" data-aos-delay="300" class="bg-primary w-80 h-full flex flex-col flex-shrink-0">
            <div class="w-full h-full px-6 py-8 bg-cover bg-center flex flex-col justify-between" :class="backgrounds[index]">

              <!-- Top Bar -->
              <div>
                <div class="flex flex-row justify-between">
                  <p class="text-base"> {{ project.date }} </p>
                  <div class="flex flex-row justify-center gap-2">
                      <a v-show="project.youtube" :href="project.youtube" target="_blank">
                        <BiYoutube class="w-8 h-8 text-red-500" />
                      </a>
                      <a v-show="project.github" :href="project.github" target="_blank">
                        <BiGithub class="w-8 h-8 text-red-500" />
                      </a>
                      <a v-show="project.external" :href="project.external" target="_blank">
                        <BiBoxArrowUpRight class="w-8 h-8 text-red-500" />
                      </a>
                  </div> 
                </div>

                <!-- Title & Description -->
                <p class="font-bold text-lg">{{ project.title }}</p>
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

    <div class="flex justify-center content-center">
      <button v-if="!show" @click="show = true" class="bg-primary w-24 h-12"> Show More </button>
      <button v-if="show" @click="show = false" class="bg-primary w-24 h-12"> Show Less </button>
    </div>
  </div>
</template>
