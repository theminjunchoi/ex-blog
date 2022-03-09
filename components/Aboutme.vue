<template>
<div>
    <div class="hidden md:block pt-10 md:pt-15 pb-3 md:pb-10 max-w-6xl mx-auto px-6">
    <div class="my-20 px-24 flex flex-row justify-between">
      <div class="w-52 h-52">
        <img :src="require(`~/assets/resources/profile/logo.jpg`)" class="profileimage" />
      </div>
      <div class="w-2/3 py-8 pl-4">
        <div class="text-gray-700 font-semibold text-lg  hover:text-blue-800">MinJun Choi | 최민준</div>
        <div class="mt-5 text-gray-600 prose text-base keepall"> I am interested in all areas related to programming. <br> I'm now studying Flutter, Kotlin and Spring. <br> I love to learn something new. <br> In this blog, I write a post about my experiences and studies. </div>
      </div>
    </div>
  </div>
  <div class="block md:hidden">
    <div class="my-10 px-5  flex flex-col items-center">
      <div class="w-40 h-40 mb-10 mt-10">
        <img :src="require(`~/assets/resources/profile/logo.jpg`)" class="profileimage" />
      </div>
      <div class="w-4/5 md:w-2/3 mb-10 text-gray-600 font-normal text-sm">
        <div class="text-gray-700 font-semibold text-lg md:mb-8 hover:text-blue-800">MinJun Choi | 최민준</div>
        <div class="mt-5 text-gray-600 prose text-base keepall"> I am interested in all areas related to programming. <br> I'm now studying Flutter, Kotlin and Spring.  <br> I love to learn something new. <br> In this blog, I write a post about my experiences and studies. </div>
      </div>
  </div>
  </div>
</div>
</template>

<style scoped>
.profileimage {
    border-radius: 20%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.keepall {
    word-break: keep-all;
}
</style>