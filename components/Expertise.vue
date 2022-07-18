<template>
  <div class="mt-8">
    <div class="mt-2">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
      >
        Frontend
      </h2>

      <ul class="flex flex-wrap gap-4 items-center">
        
        <li class="flex items-center">
          <Flutter class="h-8 w-8"></Flutter>
        </li>
        <li class="flex items-center">
          <Vuejs class="h-10 w-10"></Vuejs>
        </li>
        <li class="flex items-center">
          <Nuxt class="h-10 w-10"></Nuxt>
        </li>
      </ul>
    </div>
    
    <div class="mt-4">
      <h2
        class="mb-2 text-xl text-gray-700 font-bold dark:text-blue-200 capitalize"
      >
        ETC
      </h2>
      <ul class="mb-6 flex flex-wrap gap-4">
        <li class="flex items-center">
          <Python class="h-10 w-10"></Python>
        </li>
        <li class="flex items-center">
          <C class="h-10 w-10"></C>
        </li>
        <li class="flex items-center">
          <Java class="h-10 w-10"></Java>
        </li>
        <li class="flex items-center">
          <Firebase class="h-10 w-10"></Firebase>
        </li>
        <li class="flex items-center">
          <GitHub class="h-10 w-10"></GitHub>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import Vuejs from "../assets/devicon/vuejs.svg?inline";
import TailwindCss from "../assets/devicon/tailwindcss.svg?inline";
import Nuxt from "../assets/devicon/nuxt.svg?inline";
import Flutter from "../assets/devicon/flutter.svg?inline";
import GitHub from "../assets/devicon/github.svg?inline";
import Python from "../assets/devicon/python.svg?inline";
import Firebase from "../assets/devicon/firebase.svg?inline";
import C from "../assets/devicon/c.svg?inline";
import Java from "../assets/devicon/java.svg?inline";
export default {
  components: {
    Vuejs,
    TailwindCss,
    Nuxt,
    Flutter,
    GitHub,
    Python,
    Firebase,
    C,
    Java
  },
};
</script>
