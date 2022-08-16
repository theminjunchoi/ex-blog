<template>
  <div class="dark:bg-gray-900 mt-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900 ">
      <div class="md:w-1/3 p-2 md:flex md:justify-center " data-aos="fade-right">
        <AuthorCard />
      </div>
      <div class="md:w-2/3 px-8 " >
        <AuthorIntro data-aos="fade-down-left"/>
        <Expertise data-aos="fade-left"/>
        <TimeLine data-aos="fade-up-left"/>
      </div>
    </div>
  </div>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";
import aosMixin from '~/mixins/aos';
export default {
  data() {
    return {
      siteMetaInfo: siteMetaInfo,
    };
  },
  head: {
    title: siteMetaInfo.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: siteMetaInfo.description,
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
