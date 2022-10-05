<script setup> 
import MdiLanguagePython from '~icons/mdi/language-python'
import MdiLanguageTypescript from '~icons/mdi/language-typescript'
import MdiLanguageJavascript from '~icons/mdi/language-javascript'
import MdiVuejs from '~icons/mdi/vuejs'
import MdiNuxt from '~icons/mdi/nuxt'
import MdiReact from '~icons/mdi/react'
import TeenyiconsNextjsOutline from '~icons/teenyicons/nextjs-outline'
import MdiLanguageHtml5 from '~icons/mdi/language-html5'
import MdiLanguageCss3 from '~icons/mdi/language-css3'
import TeenyiconsFigmaOutline from '~icons/teenyicons/figma-outline'

</script>

<template>
    <div class="flex flex-col w-full h-screen items-start justify-center text-left px-8 md:px-32 gap-y-8">
        <div class="">
            <h1 class="text-3xl md:text-4xl font-bold" data-aos="fade-up" data-aos-delay="200">About Me</h1>
            <p class="text-xl md:text-2xl lg:mt-4 lg:w-[27em]"  data-aos="fade-up" data-aos-delay="300"> 
                Hi, I'm Kaylee Williams. I am a software engineer currently studying Computer Science at university and will be graduating in 2023. 
                <br /><br />  Outside of programming I enjoy watching and being involed with Esports.
            </p>
        </div>

        <div class="">
            <h1 class="text-3xl md:text-4xl font-bold mb-4"  data-aos="fade-up" data-aos-delay="500">My Toolbox</h1>
            <div class="grid grid-cols-5 gap-4"  data-aos="fade-up" data-aos-delay="600">
                
                <a class="group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">
                    <MdiLanguagePython class="w-12 h-12 md:w-16 md:h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Python
                    </span>
                </a>

                <a class="group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">
                    <MdiLanguageTypescript class="w-12 h-12 md:w-16 md:h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Typescript
                    </span>
                </a>


                <a class="group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiLanguageJavascript class="w-12 h-12 md:w-16 md:h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Javascript
                    </span>
                </a>

                <a class="group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiVuejs class="w-12 h-12 md:w-16 md:h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Vue.js
                    </span>
                </a>


                <a class=" group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiNuxt class="w-12 h-12 md:w-16 md:h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Nuxt.js
                    </span>
                </a>

                <a class="group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiReact class="w-12 h-12 md:w-16 md:h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        React
                    </span>
                </a>


                <a class="h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <TeenyiconsNextjsOutline class="w-12 h-12 md:w-16 md:h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Next.js
                    </span>
                </a>
                
                <a class="group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiLanguageHtml5 class="w-12 h-12 md:w-16 md:h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        HTML5 
                    </span>
                </a>

                <a class="group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiLanguageCss3 class="w-12 h-12 md:w-16 md:h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        CSS3 
                    </span>
                </a>


                <a class="group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <TeenyiconsFigmaOutline class="w-12 h-12 md:w-16 md:h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Figma
                    </span>
                </a>

            </div>
        </div>
    </div>
</template>