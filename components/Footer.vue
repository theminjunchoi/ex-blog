<template>
    <footer class="w-full bg-gray-100 pt-11 md:pt-14 md:pb-20 px-2 md:px-6">
        <div class="max-w-6xl mx-auto px-5">
            <div class="block md:flex relative">
                <div class="justify-around md:justify-start px-4 md:px-2 items-start flex">
                    <ul class="ml-0 w-25 md:w-28 md:m-0">
                        <li class="mb-3 font-medium text-gray-700">Links</li>
                        <li class="mb-1.5 font-normal text-gray-500 hover:underline text-sm"><a href="https://github.com/minjun0430" target="blank">GitHub</a></li>
                        <li class="mb-1.5 font-normal text-gray-500 hover:underline text-sm"><a href="https://www.linkedin.com/in/minjunchoi/" target="blank">Linkedin</a></li>
                        <li class="mb-1.5 font-normal text-gray-500 hover:underline text-sm"><a href="mailto:mj04300017@gmail.com">Email</a></li>
                    </ul>
                </div>

                <nuxt-link to="/" class="hidden md:block flex justify-center md:absolute md:top-0 md:right-0 md:items-center md:m-0">
                    <div class=""><HeaderLogo/></div>
                </nuxt-link>

                
            </div>
        </div>

    </footer>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>