<template>
  <div class="max-w-6xl mx-auto">
    <Particles 
      color="#0DAEFF"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#0DAEFF"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="h-52 rounded-2xl shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" data-aos="fade-down"> 
    </Particles>
    <nuxt-img
        src='/profile2.jpg'
        loading="lazy"
        alt="me"
        class="mx-auto logo shadow-2xl md:h-40 md:w-40 h-40 w-40 md:-mt-20 -mt-20 rounded-full"
        data-aos="fade-up"
      />
    <header class="pt-6 pb-9 sm:pb-16 text-center" data-aos="fade-right">
      <h1 class="mb-4 text-4xl sm:text-6xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200 ">
        Study
      </h1>
      <p class="text-lg text-gray-500 dark:text-slate-400">
        A record of what I'm studying
      </p>
    </header>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 mb-60 pb-12 mx-5" data-aos="fade-up">
      <div v-for='study of studies' :key="study" >
        <nuxt-link :to='`study/${study.slug}/0-1`'>
          <div class="group" >
            <div >
              <div class=" mb-1.5 flex items-center keep-all" >
                <div class="text-slate-600 text-xl font-semibold group-hover:text-indigo-400 transition duration-200 logo">{{study.name}}</div> 
                <div class="flex items-center ">
                    <div v-if="`${study.state}` == '100'"  class="ml-2 px-1.5 py-1 text-xs md:text-xs text-white bg-blue-500 rounded font-normal">100%</div> 
                    <div v-else-if="`${study.state}` == '75'"  class="ml-2 px-1.5 py-1 text-xs md:text-xs text-white bg-emerald-500 rounded font-normal">75%</div> 
                    <div v-else-if="`${study.state}` == '50'"  class="ml-2 px-1.5 py-1 text-xs md:text-xs text-white bg-orange-500 rounded font-normal">50%</div> 
                    <div v-else-if="`${study.state}` == '20'"  class="ml-2 px-1.5 py-1 text-xs md:text-xs text-white bg-yellow-500 rounded font-normal">20%</div> 
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
        .where({"visibility": true})
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
        content: "A record of what I'm studying by MinJun Choi",
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