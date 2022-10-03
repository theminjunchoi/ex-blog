<template>
  <div class="mb-6">
    <div class="mt-6 text-4xl text-gray-700 font-bold logo">
      <vue-typer
        :text='[
        "👋 Hi, there!",
        "I am MinJun Choi 😄",
        "Your Friendly Developer 💻", 
        "A Problem Solver 💡", 
        "A Growing Programmer 🚀",
        "A Tech Enthusiast 🔍"
        ]'
        :repeat='Infinity'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='2000'
        :erase-delay='250'
        erase-style='select-all'
        :erase-on-complete='false'
        caret-animation='blink'
        
      ></vue-typer>
    </div>
    
    <p class="mt-8 mb-4 dark:bg-gray-800 dark:text-blue-200 text-justify">
      I am an undergraduate student at ChungAng University. 
      I am currently majoring in Computer Science and Engineering with a strong 
      interest in software development and open source software. I am also interested 
      in solving problems and building open source software that has a strong impact 
      on my community.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
>>> .vue-typer .custom.char {
  @apply text-gray-700;
}
>>> .vue-typer .custom.char.selected {
  @apply bg-indigo-400 text-white;
}
</style>