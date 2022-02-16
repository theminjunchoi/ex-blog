<template>
    <div>
        <Header />
        <div class="pt-10 md:pt-15 pb-3 md:pb-10 max-w-6xl mx-auto px-6">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-gray-800">
                Book Review
            </div>
            <div class="font-normal text-base md:text-xl text-gray-600">
                책 내용 정리 및 복습에 관한 글입니다.
            </div>
        </div>

        <Search />

        <div class="max-w-6xl grid grid-cols-1 colspan mt-5 md:mt-8 pb-14 md:pb-24 mx-auto px-6">
            <div class="group" v-for="article of articles" :key="article">
                <nuxt-link :to='`article/${article.slug}`'>
                    <div class="article-inner flex justify-between items-center border-t py-5 md:py-8 border-gray-600">
                    <div class="pr-4">
                        <p class="mb-1 md:mb-1.5 text-sm md:text-sm text-gray-400">{{article.category}} · {{article.author}}</p>
                        <h2 class="mb-1 md:mb-1.5 text-lg md:text-xl font-normal  text-gray-800">{{ article.title }}</h2>
                        <p class=" text-sm md:text-base text-gray-600 custom-text">{{article.description}}</p>
                    </div>
                    <!-- <div class="pl-4 pr-6 hidden md:block">
                        <ExternalLinkLogo class="fill-current text-gray-400 group-hover:text-gray-700 transition duration-200" />
                    </div> -->
                    </div>
                </nuxt-link>
            </div>
        </div>

    </div>

</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('blog', params.slug)
      .where({category: 'book-review'})
      .sortBy('createdAt', 'desc')
      .fetch();
    return {
      articles
    }
  },
    head: {
        title: 'book-review',
        htmlAttrs: {
        lang: 'ko'
        },
        meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'MinJun Choi\'s blog' },
        { name: 'format-detection', content: 'telephone=no' }
        ]
    },
}
</script>

<style scoped>
.keepall{
    word-break: keep-all;
}
</style>