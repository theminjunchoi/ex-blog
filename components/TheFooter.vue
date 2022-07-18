<template>
  <footer>
    <div class="flex flex-col items-center mt-16">
      <div class="flex mb-3 space-x-4">
        <a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="siteMetadata.github"
          ><span class="sr-only">github</span>
          <img class="w-8 h-8" src="~assets/icon/github_new.svg" /> </a
        ><a
          class="text-sm text-gray-500 transition hover:text-gray-600"
          target="_blank"
          rel="noopener noreferrer"
          :href="`mailto:${siteMetadata.email}`"
          ><span class="sr-only">mail</span>
          <img class="w-8 h-8" src="~assets/icon/mail.svg" /></a
        >
      </div>
      <div class="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>Copyright © {{ new Date().getFullYear() }}</div>
        <div>•</div>
        <a href="/"
          >{{ siteMetadata.author }}'s blog - {{ siteMetadata.slogan }}</a
        >
      </div>
      
      
    </div>
  </footer>
</template>

<script>
import siteMetaInfo from "@/data/sitemetainfo";

export default {
  data() {
    return {
      siteMetadata: siteMetaInfo,
    };
  },
  
};
</script>
