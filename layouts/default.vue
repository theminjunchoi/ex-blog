<template>
  <!-- Section 1 -->
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-8xl">
      <TheHeader />
      <Nuxt />
      <VueCursor scaleElement="logo" dotColor="#41B883" :borderColor="'#41B883'"/>
      <TheFooter />
    </div>
  </section>
</template>

<script>
import VueCursor from "~/components/VueCursor.vue";
export default {
  components: {
    VueCursor
  }
};
</script>

<style>
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  * { font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;; }
</style>
