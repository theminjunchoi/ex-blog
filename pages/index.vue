<template>
  <div class="dark:bg-gray-900 mt-6">
    <div class="max-w-screen-lg md:flex mx-auto dark:bg-gray-900 ">
      <div class="md:w-1/3 p-2 md:flex md:justify-center fadeinsidecom">
        <AuthorCard />
      </div>
      <div class="md:w-2/3 px-8 fadeinupcom">
        <AuthorIntro />
        <Expertise />
        <TimeLine />
      </div>
    </div>
  </div>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";
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
};
</script>

<style>
.fadeinupcom {
  animation: fadeinup 0.8s;
}
.fadeinsidecom {
  animation: fadeinside 0.8s;
}
@keyframes fadeinup {
  0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
  }
  100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
  }
}
@keyframes fadeinside {
  0% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
    transform: translateX(-100px);
  }
  100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
  }
}
</style>
