<template>
  <div class="mx-auto max-w-6xl">
    <div class="bg-gradient-to-r from-emerald-500 to-blue-500 mt-2 h-52 rounded-2xl" data-aos="fade-down"></div>
    <nuxt-img
        src='/profile3.jpg'
        loading="lazy"
        alt="me"
        class="mx-auto logo shadow-2xl md:h-40 md:w-40 h-40 w-40 md:-mt-20 -mt-20 rounded-full"
        data-aos="fade-up"
      />
    <header class="pt-6 pb-9 sm:pb-8 text-center" data-aos="fade-right">
      <h1 class="mb-4 text-4xl sm:text-6xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200 ">
        Blog
      </h1>
      <p class="text-lg text-gray-500 dark:text-slate-400">
        A record of everything from trivial to what I learned and felt
      </p>
    </header>
    
    <div data-aos="zoom-in" class="select-none px-4 items-center justify-center sm:justify-start overflow-hidden flex pt-4 md:mb-4">
      <nav class="flex flex-wrap items-center justify-center flex-row space-x-2 sm:space-x-4" aria-label="Tabs">
        <button @click="currentCategory = category" :class="{ 'bg-indigo-200 text-slate-800': category === currentCategory }" v-for="category in categories" :key="category" class="flex text-gray-300 focus:outline-none focus:ring-transparent focus:ring-offset-transparent hover:text-hot-pink px-3 py-2 font-medium text-sm rounded-xl">
          {{ category }}
        </button>
      </nav>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-5 gap-y-12 mb-60 pb-12 mx-5" data-aos="fade-up">
      <div v-for='article of postsByCategories' :key="article">
        <nuxt-link :to='`blog/${article.slug}`'>
          <div class="group" >
            <div class="">
              <div class=" mb-1.5 flex items-center keep-all">
                <div class="text-slate-600 text-xl font-semibold group-hover:text-indigo-400 transition duration-200 logo">{{article.title}}</div> 
                 
                <div class="flex items-center ">
                    <div v-if="`${article.category}` == 'PSAI'" class="ml-2 px-1.5 py-1 text-xs md:text-xs text-white bg-blue-400 rounded font-normal">{{article.category}}</div> 
                    <div v-else-if="`${article.category}` == 'retrospect'"  class="ml-2 px-1.5 py-1 text-xs md:text-xs text-white bg-emerald-500 rounded font-normal">{{article.category}}</div> 
                    <div v-else-if="`${article.category}` == 'etc'"  class="ml-2 px-1.5 py-1 text-xs md:text-xs text-white bg-yellow-500 rounded font-normal">{{article.category}}</div>
                    <div v-else > </div> 
                </div>
              </div>
              
              <div class="keep-all text-slate-500 mb-1.5">{{article.description}}</div>
              <div class="keep-all text-slate-500 mb-1.5 ">{{article.date}}</div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
const ALL = 'all'

import aosMixin from '~/mixins/aos'; 

export default {
  computed: {
    categories() {
      return [ALL, ...new Set(this.articles.map(article => article.category))]
    },
    postsByCategories() {
      if (this.currentCategory === ALL)
        return this.articles
      return this.articles.filter(article => article.category === this.currentCategory)
    }
  },
  data() {
    return {
      currentCategory: ALL,
      ALL: ALL, // exporting it to template
    }
  },
  head() {
    return {
      title: `blog -- ${this.$config.name}`
    }
  },
  async asyncData({ $content }) {
    const articles = await $content("articles")
      .only([
        "title",
        "description",
        "img",
        "slug",
        "category",
        "author",
        "date",
        "visibility",
      ])
      .where({"visibility": true})
      .sortBy("date", "desc")
      .fetch();

    return {
      articles,
    };
  },
  head: {
    title: "MinJun Choi | Blogs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Its MinJun Choi's Pen and Paper to write ",
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
