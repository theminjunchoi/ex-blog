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
    <header class="pt-6 pb-9 mb-4 sm:pb-16 text-center" data-aos="fade-right">
      <h1 class="mb-4 text-4xl sm:text-6xl tracking-tight text-slate-800 font-extrabold dark:text-slate-200 ">
        Blog
      </h1>
      <p class="text-lg text-gray-500 dark:text-slate-400">
        A record of everything from trivial to what I learned and felt
      </p>
    </header>
    <div class="space-y-12 md:px-24 max-w-7xl " >
      <blog-item
      class="logo"
      data-aos="fade-up"
        v-for="article in articles"
        :key="article.title"
        :title="article.title"
        :description="article.description"
        :date="article.date"
        :slug="article.slug"
      ></blog-item>
    </div>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos';
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .only([
        "title",
        "description",
        "img",
        "slug",
        "tag",
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
