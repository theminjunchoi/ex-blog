<template>
<div>
  <div class=" ">
    
    <Header />
    
    <!-- Banner left wording -->
    <section class=" max-w-6xl mx-auto flex flex-col sm:justify-between items-center sm:flex-row mt-12 sm:mt-10">
      <div class="w-full md:w-1/3 text-left ml-7">
        <h1 class="font-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-black">
          Hi, I am MinJun Choi
        </h1>
        <p class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left text-gray-400" >
          A Growing Developer <br>
          CSE Student
        </p>
      </div>

      <!-- Banner right illustration -->
      <div class="w-full md:w-2/3 text-right float-right">
        <img src="~/assets/resources/profile/dev.svg" />
      </div>
    </section>
  </div>

<!-- 검색 -->
  <div class="mt-14 md:mt-24 mb-5 md:mb-8 flex justify-between items-center max-w-6xl mx-auto px-6">
    <div class="text-3xl text-gray-800 font-semibold mb-2 md:mb-5">Search Articles</div>
  </div>
  <Search />

<!-- 카테고리 -->
  <div class="mt-14 md:mt-24 mb-5 md:mb-8 flex justify-between items-center max-w-6xl mx-auto px-6">
    <div class="text-3xl text-gray-800 font-semibold mb-2 md:mb-5">Category</div>
  </div>
  <Category />

<!-- 최신 아티클 -->
  <div class="mt-14 md:mt-24 mb-6 md:mb-10 flex justify-between items-center max-w-6xl mx-auto px-6">
        <div class="text-3xl text-gray-800 font-semibold mb-2 md:mb-5">Latest Articles</div>
        <nuxt-link to="all-articles">
          <div class="text-base text-blue-500 poppins hover:underline hidden md:block">See All Articles</div>
        </nuxt-link>
    </div>

    <div class="max-w-6xl grid grid-cols-1 colspan mt-5 md:mt-8 mx-auto px-6 md:pb-32">
        <div class="group" v-for="article of articles" :key="article">
            <nuxt-link :to='`article/${article.slug}`'>
                <div class="article-inner flex items-center border-t py-5 md:py-8 border-gray-600">
                  <div class="sbox hidden md:block group-hover:shadow-lg transform group-hover:scale-105 transition group-hover:duration-500">
                    <img class="profile" :src="require(`~/assets/resources/${article.img}`)" alt="">
                  </div>
                  <div class="px-0 md:px-4 md:pl-9">
                      <p class="mb-1 md:mb-1.5 text-sm md:text-sm text-blue-900">{{article.category}} · MinJun Choi</p>
                      <h2 class="mb-1 md:mb-1.5 text-lg md:text-xl font-medium  text-gray-800 transition group-hover:text-blue-500 group-hover:duration-500">{{ article.title }}</h2>
                      <p class=" text-sm md:text-base text-gray-600 custom-text">{{article.description}}</p>
                  </div>
                </div>
            </nuxt-link>
        </div>

        <div class="flex justify-center pt-3 pb-7 md:hidden">
          <nuxt-link to="all-articles" class=" text-blue-500 text-center text-sm">
            See All Articles
          </nuxt-link>
        </div>
    </div>


</div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('article', params.slug)
      .sortBy('createdAt', 'desc')
      .only([
        "title",
        "description",
        "slug",
        "category",
        "img"
        ])
      .limit(5)
      .fetch();
    
    return {
      articles, 
    }
  },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>

<style scoped>

.profile {
  width: 100%;
  height: 100%;
  object-fit: 100%;
}
.sbox {
  width: 212px;
  height: 141.33px;
  border-radius: 0.75rem;
  overflow: hidden;
}
</style>


