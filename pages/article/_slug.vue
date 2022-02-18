<template>
<div class="w-full bg-white">
    <Header />
    <div class="related max-w-5xl mx-auto pt-28 pb-12 grid grid-cols-8 md:pb-24 md:pt-44">
        <div class="col-span-7">
        <div class="max-w-3xl mx-auto">
            <p class="text-base md:text-xl text-gray-400 text-center mb-2">
                <nuxt-link :to="{path: `/${article.category}`}" replace class="hover:underline">
                    {{article.category}}
                </nuxt-link>
            </p>
            <p class="custom-text leading-snug md:leading-normal px-5 md:px-0 mb-2 text-2xl md:text-5xl text-center text-gray-800 title font-semibold">{{article.title}}</p>
            <p class="text-base md:text-xl text-gray-500 text-center mb-16">
                {{formatDate(article.createdAt)}} · by MinJun Choi
            </p>
        </div>
        <img :src="require(`~/assets/resources/${article.img}`)" alt="" class="mt-6 mb-8 md:rounded-4xl md:my-10" />

        <nuxt-content :document="article" class="prose max-w-5xl col-span-2 custom-text px-6"/>
        
        

        <Prevnext :prev="prev" :next="next" />
    </div>

<aside ref="toc" class="hidden col-span-1 lg:flex lg:flex-col">
      <div class="sticky top-16">
        <h2 class="uppercase text-black font-h2 text-lg lg:mt-16 lg:md-3 tracking-wider">Contents</h2>
        <nav class="">
          <ul>
            <li
              @click="tableOfContentsHeadingClick(link)"
              :class="{
                'pl-4': link.depth === 3
              }"
              class="toc-list"
              v-for="link of article.toc"
              :key="link.id"
            >
              <a
                :class="{
                  'text-blue-500 hover:text-blue-600':
                    link.id === currentlyActiveToc,
                  'text-black hover:gray-900': link.id !== currentlyActiveToc
                }"
                role="button"
                class="transition-colors duration-75 text-base mb-2 block"
                :href="`#${link.id}`"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </aside>

    </div>
</div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('article', params.slug)
        .fetch();

        const [prev, next] = await $content('article')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch();

        return { article, prev, next}
    },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
        },
        tableOfContentsHeadingClick(link) {
        this.currentlyActiveToc = link.id;
        },
    },
    data() {
    return {
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$refs.nuxtContent,
        threshold: 0
      }
    };
  },
    mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document
      .querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]")
      .forEach(section => {
        this.observer.observe(section);
      });
    },
    beforeDestroy() {
    this.observer.disconnect();
    },

    head() {
        return {
            title: this.article.title,
            description: this.article.description,
            htmlAttrs: {
            lang: 'ko'
            },
            meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 't-type',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
            hid: 'og-type',
            property: 'og:type',
            content: 'website'
            },
            {
            hid: 'og:title',
            property: 'og:title',
            content: this.article.title
            },
            {
            hid: 'og:description',
            property: 'og:description',
            content: this.article.description
            },
            {
            hid: 'og:image',
            property: 'og:image',
            content: 'https://raw.githubusercontent.com/minjun0430/blog/main/assets/resources/profile/logo.jpg'
            },
            {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: 'https://raw.githubusercontent.com/minjun0430/blog/main/assets/resources/profile/logo.jpg'            },
            {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: this.article.title
            },
            {
            hid: 'og:url',
            name: 'og:url',
            content: `https://choiminjun.com/blog/${this.$route.params.slug}`
            },
            ],
        }
    },

}
</script>

<style scoped>
img {
    margin-left: auto;
    margin-right: auto;
}
.custom-text{
    word-break: keep-all;
}
.box {
    width: 150px;
    height: 150px; 
    border-radius: 70%;
    overflow: hidden;
}
.profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>