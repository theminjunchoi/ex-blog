<template>
    <div class="bg-gray-light h-screen">
        <Header />
        <div class="pt-10 md:pt-15 pb-3 md:pb-10 max-w-6xl mx-auto px-6">
            <div class="pb-6 text-3xl md:text-4xl font-semibold text-gray-800">
                About
            </div>

            <Aboutme />
            
        </div>
        </div>
</template>

<script>
export default {
  

    head: {
        title: 'About',
        htmlAttrs: {
        lang: 'ko'
        },
        meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'MinJun Choi\'s blog' },
        { name: 'format-detection', content: 'telephone=no' }
        ]
    },

}
</script>

<style scoped>
.profile {
    border-radius: 20%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.keepall {
    word-break: keep-all;
}
</style>