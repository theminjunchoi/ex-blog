<template>
    <div class="w-full z-40">
        <div class="max-w-screen-2xl px-3 md:px-7 py-3 md:py-9  h-16 mx-auto flex items-center justify-between">

            <div class="max-w-fit md:ml-0">
                <nuxt-link to="/">
                    <HeaderLogo />
                </nuxt-link>
            </div>

            
            <ul class="flex space-x-1 items-center h-10">
                    
                <li class="py-1.5 px-2.5 rounded-lg md:block text-slate-800 lgtoxl hover:text-black transition hover:duration-300 font-medium">
                    <nuxt-link :to="{path: '/all-articles'}" replace>Article</nuxt-link>
                </li>
                <li class= "py-1.5 px-2.5 rounded-lg md:block text-slate-800 lgtoxl hover:text-black transition hover:duration-300 font-medium">
                    <nuxt-link :to="{path: '/about'}" replace>About</nuxt-link>
                </li>

            </ul>

            

        </div>


    </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>

</style>