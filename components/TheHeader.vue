<template>
  <nav class="w-full mx-auto sticky backdrop-blur-sm top-0 z-50 ">
    <div
      class=" flex flex-wrap items-center justify-center md:py-4 py-2 overflow-hidden  font-2xl sm:px-4 md:overflow-visible md:px-2"
    >
      <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
      <label
        class="menu-icon block cursor-pointer md:hidden px-2 relative select-none "
        for="menu-btn"
      >
        <span class="bg-grey-darkest flex items-center relative"></span>
      </label>

      <ul class="flex justify-center list-reset m-0 w-full md:w-auto ">
        <li v-for="item in navLinks" :key="item.path">
          <NuxtLink
            :to="item.path"
            class=" logo block md:inline-block px-4  no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl"
            >{{ item.name }}</NuxtLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import menu from "../data/menu";

export default {
  name: "TheHeader",
  data() {
    return {
      navLinks: menu,
    };
  },
};
</script>

<style>
.nuxt-link-exact-active {
  @apply text-indigo-600;
}

</style>
