<template>
  <div class="w-screen h-screen bg-gray-light">
    <Header />
    <div class="mx-auto max-w-7xl ">

      <div class="hidden md:block">
        <div class="items-end flex justify-center py-20 my-20">
          <div class="mr-2">
            <LogoC class="hover:animate-wiggle logoC"/>
          </div>
          <div class="">
            <LogoM class="hover:animate-wiggle logo"/>
          </div>
          <div class="ml-2">
            <LogoJ class="hover:animate-wiggle logo"/>
          </div>
        </div>
      </div>

      <div class="block md:hidden">
        <div class="mx-auto flex justify-center py-10 my-10">
          <LogoVertical class="logov mr-6"/>
        </div>
      </div>


    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.logo {
  height: 150px;
}
.logoC {
  height: 215.5px;
}
.logov {
  height: 500px;
}
</style>
