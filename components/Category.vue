<template>
    <div>
        <div class="max-w-6xl flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-6 gap-x-3 gap-y-3 pb-18 md:pb-8">
            <div class="border border-gray-900 h-40 sm:h-44 rounded-lg bg-white hover:bg-blue-50 group">
                <nuxt-link to="project">
                    <div class="h-2/5 border-b border-gray-900 flex items-center">
                        <div class="text-2xl text-gray-800 font-medium px-6 hover:underline">Project</div>
                    </div>
                    <div class="h-2/5 flex items-center">
                        <div class="px-6">
                            <div class="text-gray-600 mb-1 ">Articles about Toy Project.</div>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="border border-gray-900 h-40 sm:h-44 rounded-lg bg-white hover:bg-blue-50 group">
                <nuxt-link to="application">
                    <div class="h-2/5 border-b border-gray-900 flex items-center">
                        <div class="text-2xl text-gray-800 font-medium px-6 hover:underline">Application</div>
                    </div>
                    <div class="h-2/5 flex items-center">
                        <div class="px-6">
                            <div class="text-gray-600 mb-1 ">Articles about studying app developing (mainly Flutter).</div>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="border border-gray-900 h-40 sm:h-44 rounded-lg bg-white hover:bg-blue-50 group">
                <nuxt-link to="algorithm">
                    <div class="h-2/5 border-b border-gray-900 flex items-center">
                        <div class="text-2xl text-gray-800 font-medium px-6 hover:underline">Algorithm</div>
                    </div>
                    <div class="h-2/5 flex items-center">
                        <div class="px-6">
                            <div class="text-gray-600 mb-1 ">Articles about algorithm and process of solving problems.</div>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="border border-gray-900 h-40 sm:h-44 rounded-lg bg-white hover:bg-blue-50 group">
                <nuxt-link to="book-review">
                    <div class="h-2/5 border-b border-gray-900 flex items-center">
                        <div class="text-2xl text-gray-800 font-medium px-6 hover:underline">Book Review</div>
                    </div>
                    <div class="h-2/5 flex items-center">
                        <div class="px-6">
                            <div class="text-gray-600 mb-1 ">Articles about reviewing books.</div>
                        </div>
                    </div>
                </nuxt-link>
            </div>
            <div class="border border-gray-900 h-40 sm:h-44 rounded-lg bg-white hover:bg-blue-50 group">
                <nuxt-link to="uncategorized">
                    <div class="h-2/5 border-b border-gray-900 flex items-center">
                        <div class="text-2xl text-gray-800 font-medium px-6 hover:underline">Uncategorized</div>
                    </div>
                    <div class="h-2/5 flex items-center">
                        <div class="px-6">
                            <div class="text-gray-600 mb-1 ">Ambiguous articles to classify.</div>
                        </div>
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