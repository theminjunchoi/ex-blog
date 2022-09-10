<template>
  <div class="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
    <div class="pt-6 mt-6 pb-4 space-y-2 md:space-y-5" data-aos="fade-right">
      <h1
        class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14"
      >
        Projects
      </h1>
      <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
        Some of the projects I've build or been a part of.
      </p>
    </div>
    <main class="relative mb-auto">
      <div class="">
        <div class="container py-12" data-aos="fade-up">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 -mx-4">
            <project-card class="md:w-full mx-auto w-full logo"
              v-for="item in projectsData"
              :key="item.title"
              :title="item.title"
              :description="item.description"
              :href="item.href"
              :github="item.github"
              :tech1="item.tech1"
              :tech2="item.tech2"
              :tech3="item.tech3"
            ></project-card>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import projectsData from "../data/projects";
import aosMixin from '~/mixins/aos';
export default {
  data() {
    return {
      projectsData: projectsData,
    };
  },
  head: {
    title: "MinJun Choi | Projects",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Some of Projects developed by MinJun Choi",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  name: 'PageIndex',
  mixins: [aosMixin]
};
</script>
<style>

</style>
