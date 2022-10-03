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
    <div class="flex flex-col h-full items-start justify-center text-left px-72 gap-y-8">
        <div class="">
            <h1 class="text-4xl font-bold">About Me</h1>
            <p class="text-2xl mt-4 w-[27em]"> 
                Hi, I'm Kaylee Williams. I am a software engineer currently studying Computer Science at university and will be graduating in 2023. 
                <br /><br />  Outside of programming I enjoy watching and being involed with Esports.
            </p>
        </div>

        <div class="">
            <h1 class="text-4xl font-bold mb-4">My Toolbox</h1>
            <div class="grid grid-cols-5 gap-4">
                
                <a class="w-16 h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">
                    <MdiLanguagePython class="w-16 h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Python
                    </span>
                </a>

                <a class="w-16 h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">
                    <MdiLanguageTypescript class="w-16 h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Typescript
                    </span>
                </a>


                <a class="w-16 h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiLanguageJavascript class="w-16 h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Javascript
                    </span>
                </a>

                <a class="w-16 h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiVuejs class="w-16 h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Vue.js
                    </span>
                </a>


                <a class="w-16 h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiNuxt class="w-16 h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Nuxt.js
                    </span>
                </a>

                <a class="w-16 h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiReact class="w-16 h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        React
                    </span>
                </a>


                <a class="w-16 h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <TeenyiconsNextjsOutline class="w-16 h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Next.js
                    </span>
                </a>
                
                <a class="w-16 h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiLanguageHtml5 class="w-16 h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        HTML5 
                    </span>
                </a>

                <a class="w-16 h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <MdiLanguageCss3 class="w-16 h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        CSS3 
                    </span>
                </a>


                <a class="w-16 h-16 group flex flex-col relative items-center gap-y-5 text-pink-500 hover:text-pink-900 transition ease-in-out duration-300 ">                    <TeenyiconsFigmaOutline class="w-16 h-16" />             
                    <span class="absolute hidden group-hover:flex z-10 mt-[72px] w-fit px-2 py-1 bg-purple-700 rounded-lg text-center text-white text-base after:content-[''] after:absolute after:left-1/2 after:bottom-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:w-fit after:border-t-transparent after:border-purple-700">
                        Figma
                    </span>
                </a>

            </div>
        </div>
    </div>
</template>