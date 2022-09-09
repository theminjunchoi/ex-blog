<template>
  <div class="max-w-6xl mx-auto">
    <header class="pt-16 pb-9 mb-4 sm:pb-16 sm:text-center" data-aos="fade-right">
      <h1 class="mb-4 text-4xl sm:text-6xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200 ">
        Study
      </h1>
      <p class="text-lg text-gray-500 dark:text-slate-400">
        A record of everything that I'm studying
      </p>
    </header>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 mb-60 pb-12" data-aos="fade-up">
      <div v-for='study of studies' :key="study">
        <nuxt-link :to='`study/${study.slug}/0-1`'>
          <div class="group" >
            <div>
              <div class=" mb-1.5 flex items-center keep-all">
                <div class="text-slate-600 text-xl font-semibold group-hover:text-indigo-400 transition duration-200 logo">{{study.name}}</div> 
                <div class="flex items-center ">
                    <div v-if="`${study.state}` == '공부 완료'"  class="ml-2 px-1.5 py-1 text-xs md:text-xs text-white bg-blue-400 rounded font-normal">공부 완료</div> 
                    <div v-else-if="`${study.state}` == '공부 중'"  class="ml-2 px-1.5 py-1 text-xs md:text-xs text-white bg-rose-400 rounded font-normal">공부 중</div> 
                    <div v-else > </div> 
                </div>
              </div>
              
              <div class="keep-all text-slate-500 mb-1.5">{{study.description}}</div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>


</template>

<script>
import aosMixin from '~/mixins/aos';
export default {
    async asyncData({ $content, params }) {
        const studies = await $content('studies', params.id)
        .sortBy('order', 'asc')
        .fetch();
        return { studies }
    },
    name: 'PageIndex',
    mixins: [aosMixin],
    head: {
    title: "MinJun Choi | Study",
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
}
</script>

<style scoped>
.keep-all{
    word-break: keep-all;
}
.inner {
  box-sizing: border-box;
  position: relative;
}
.keep-all {
  word-break: keep-all;
}
.lead-box {
    overflow: hidden;
}
.square-box {
    overflow: hidden;
}
.profile {
    object-fit: cover;
    /* overflow: hidden; */
}
</style>