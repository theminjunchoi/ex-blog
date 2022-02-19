<template>
    <div class="w-full p-3 ">
        <div class="max-w-6xl mx-auto flex items-center justify-between px-4">

            <div class="max-w-fit md:ml-0 hover:animate-wiggle hover:drop-shadow">
                <nuxt-link to="/">
                    <HeaderLogo />
                </nuxt-link>
            </div>

            <div class="">
                <ul class="flex space-x-1 text-base items-center h-10">
                    
                    <li>
                        <div class="py-1 px-3 rounded-lg hover:bg-indigo-300">
                            <nuxt-link :to="{path: '/all-articles'}" class="text-gray-700 text-sm font-semibold">Article</nuxt-link>
                        </div>
                    </li>
                    <li>
                        <div class="py-1 px-3 rounded-lg hover:bg-indigo-300">
                            <nuxt-link :to="{path: '/about'}" class="text-gray-700 text-sm font-semibold">About</nuxt-link>
                        </div>
                    </li>

                </ul>

            </div>

        </div>


    </div>
</template>

<script>
export default {
    
};
</script>

<style scoped>

</style>