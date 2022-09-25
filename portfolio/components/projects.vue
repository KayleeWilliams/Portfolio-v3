<script setup>
  // Import icons
  import BiGithub from '~icons/bi/github'
  import BiYoutube from '~icons/bi/youtube'
  import BiBoxArrowUpRight from '~icons/bi/box-arrow-up-right'
  // import HeroiconsOutlineExternalLink from "~icons/heroicons-outline/external-link";

  let show = ref(false)

// Get projects
  const query = await queryContent('projects/').sort({_file: -1, $numeric: true}).find()
</script>

<template>
  <div class="flex flex-col content-center justify-center gap-y-8 w-full"> 
    <div class="flex flex-row flex-wrap gap-2 px-32 justify-center">
        <div v-for="(project, index) in query" :key="project._path">
          <div v-if="show || (index <= 2)" data-aos="fade-up" data-aos-delay="300" class="flex flex-col flex-shrink-0 px-8 py-12 justify-between h-full w-80 bg-blue-100">
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
              <p class="font-bold text-xl">{{ project.title }}</p>
              <p class="text-lg">{{ project.description }}</p>
            </div>
              <br />
              <p class="text-xs">{{ project.tech }}</p>
            </div>
        </div>
    </div>
      <button v-if="!show" @click="show = true" class="bg-teal-200 m-auto w-24 h-12"> Show More </button>
      <button v-if="show" @click="show = false" class="bg-teal-200 m-auto w-24 h-12"> Show Less </button>
  </div>
</template>
