<template>
<div class="px-4 mx-auto md:max-w-6xl">

<p class="text-center mt-10 font-bold my-5 text-indigo-500">
      {{ formatDate(article.date) }}
    </p>
    <h1 class="text-4xl text-gray-700 font-extrabold mb-10 text-center">
      {{ article.title }}
    </h1>
    <div class="flex items-center font-medium mt-6 sm:mx-3 justify-center">
      <nuxt-img
        :src="siteMetadata.author_image"
        loading="lazy"
        alt=""
        class="mr-3 w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800"
      />
      <div>
        <div class="text-slate-900 dark:text-slate-200">
          {{ siteMetadata.author }}
        </div>
        
      </div>
    </div>
  <div class="grid grid-cols-3 gap-12">
    <div class="col-span-3 md:col-span-2">
      
      <img
        class="mx-auto w-4/5 my-10 rounded-md drop-shadow-sm"
        :src="article.image"
      />

      <nuxt-content class=" prose max-w-5xl mx-auto leading-loose" :document="article" />
    
    </div>
    

    
    <aside ref="toc" class="col-span-1 hidden md:block  lg:flex lg:flex-col">
      <div class="sticky top-16">
        <h2
          class="uppercase text-black font-h2 text-lg lg:mt-16 tracking-wider" 
        >
          Table of contents
        </h2>
        <nav class="mt-4">
          <ul class="">
            <li
              @click="tableOfContentsHeadingClick(link)"
              :class="{
                'pl-4': link.depth === 3,
              }"
              class="toc-list"
              v-for="link of article.toc"
              :key="link.id"
            >
              <a
              :class="{
                  'text-indigo-500 hover:text-indigo-600': link.id === currentlyActiveToc,
                  'text-black hover:gray-900': link.id !== currentlyActiveToc,
                }"
                role="button"
                class="transition-colors duration-75 text-base mb-2 block logo"
                :href="`#${link.id}`"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    
  </div>
  <Prevnext :prev="prev" :next="next" class="mx-4 mt-24"/>
  </div>
  
</template>
<script>
import Prism from "~/plugins/prism";
import siteMetaInfo from "@/data/sitemetainfo";
export default {
  data() {
    return {
      title: 0,
      siteMetadata: siteMetaInfo,
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0,
      },
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          if (entry.isIntersecting) {
            this.currentlyActiveToc = id;
          }
      });
    }, this.observerOptions);
    // Track all sections that have an `id` applied
    document.querySelectorAll('.nuxt-content h2[id], .nuxt-content h3[id]').forEach((section) => {
        this.observer.observe(section);
    });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();
    const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .where({"visibility": true})
        .sortBy('datetime', 'asc')
        .surround(params.slug)
        .fetch();
    return {
      article: article, prev: prev, next: next
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id+1;
    },
  },
  mounted() {
    Prism.highlightAll();
  },
  head() {
    //console.log(this.article.title);
    return {
      title: this.article.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>
<style>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
code::before {
    content: none !important;
}
code::after {
    content: none !important;
}
</style>