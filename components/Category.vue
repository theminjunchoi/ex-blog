<template>
    <div>
        <div class="max-w-6xl flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-6 sm:gap-7 pb-18 md:pb-8">
            <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" aria-label="Single Project">
                <nuxt-link to="project">
                    <div>
                        <img :src="require(`~/assets/resources/category/cproject.jpg`)" class="rounded-t-xl border-none"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-ternary-dark  font-semibold mb-2">Project</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" aria-label="Single Project">
                <nuxt-link to="application">
                    <div>
                        <img :src="require(`~/assets/resources/category/capp.jpg`)" class="rounded-t-xl border-none"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-ternary-dark  font-semibold mb-2">Application</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" aria-label="Single Project">
                <nuxt-link to="algorithm">
                    <div>
                        <img :src="require(`~/assets/resources/category/calgo.jpg`)" class="rounded-t-xl border-none"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-ternary-dark  font-semibold mb-2">Algorithm</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" aria-label="Single Project">
                <nuxt-link to="book-review">
                    <div>
                        <img :src="require(`~/assets/resources/category/cbook.jpg`)" class="rounded-t-xl border-none"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-ternary-dark  font-semibold mb-2">Book Review</p>
                    </div>
                </nuxt-link>
            </div>
            <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark" aria-label="Single Project">
                <nuxt-link to="uncategorized">
                    <div>
                        <img :src="require(`~/assets/resources/category/cetc.jpg`)" class="rounded-t-xl border-none"/>
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="font-general-semibold text-xl text-ternary-dark  font-semibold mb-2">Uncategorized</p>
                    </div>
                </nuxt-link>
            </div>

      
            
    
            
            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>