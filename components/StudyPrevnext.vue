<template>
            <div class="flex justify-between pt-8 px-3 border-t border-gray-300 mt-10">
                <div class="w-1/2 py-1">
                <NuxtLink v-if="prev" :to="{path: `/study/${currititle}/${prev.slug}`}" replace>
                    <div class="text-slate-600 hover:underline text-sm md:text-base keep-all logo">
                    <!-- <span class="hidden md:inline"></span> -->
                    {{prev.slug}}. {{ prev.title }}
                    </div>
                </NuxtLink>
                <nuxt-link v-else to="/study">
                    <div class="text-slate-600 hover:underline text-sm md:text-base logo">
                    <!-- <span class="hidden md:inline"></span> -->
                    이전 내용이 없습니다.
                    </div>
                </nuxt-link>
                </div>
                <div class="w-1/2 py-1">
                <NuxtLink v-if="next" :to="{path: `/study/${currititle}/${next.slug}`}" replace>
                    <div class="text-slate-600 hover:underline text-sm md:text-base text-right keep-all logo">
                    {{next.slug}}. {{ next.title }} 
                    <!-- <span class="hidden md:inline"></span> -->
                    </div>
                </NuxtLink>
                <nuxt-link v-else to="/study">
                    <div class="text-slate-600 hover:underline text-sm md:text-base text-right logo">
                    다음 내용이 없습니다. 
                    <!-- <span class="hidden md:inline"></span> -->
                    </div>
                </nuxt-link>
                </div>
            </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
    currititle: {
      type: String,
      default: () => null,
    },
  },
};
</script>

<style scoped>
.keep-all{
    word-break: keep-all;
}
</style>