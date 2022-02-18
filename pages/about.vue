<template>
    <div>
        <Header />
        <div class="pt-10 md:pt-15 pb-3 md:pb-10 max-w-6xl mx-auto px-6">
            <div class="pb-6 text-3xl md:text-4xl font-semibold text-gray-800">
                About
            </div>


            <div class=" hidden md:block">
                <div class="my-20 px-24 flex flex-row justify-between">
                    <div class="w-52 h-52">
                        <img :src="require(`~/assets/resources/profile/logo.jpg`)" class="profile" />
                    </div>
                    <div class="w-2/3 py-8 pl-4">
                        <div class="text-gray-700 font-semibold text-lg md:mb-8 hover:text-blue-800">MinJun Choi | 최민준</div>
                        <div class="mt-5 text-gray-600 prose text-base keepall"> 프로그래밍과 관련된 모든 분야에 관심이 있습니다. <br> 본 블로그에서는 제가 경험하고 공부한 내용의 포스트를 기재하고 있습니다. </div>
                    </div>
                </div>
            </div>

            <div class="block md:hidden">
            <div class="my-10 px-5 flex flex-col items-center">
                <div class="w-40 h-40 mb-10">
                    <img :src="require(`~/assets/resources/profile/logo.jpg`)" class="profile" />
                </div>
                <div class="w-4/5 md:w-2/3 text-gray-600 font-normal text-sm">
                    <div class="text-gray-700 font-semibold text-lg md:mb-8 hover:text-blue-800">MinJun Choi | 최민준</div>
                        <div class="mt-5 text-gray-600 prose text-base keepall"> 프로그래밍과 관련된 모든 분야에 관심이 있습니다. <br> 본 블로그에서는 제가 경험하고 공부한 내용의 포스트를 기재하고 있습니다. </div>
                </div>
            </div>
        </div>
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