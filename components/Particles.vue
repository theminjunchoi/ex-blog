<template>
  <vue-particles />
</template>
<script>
  if (process.browser) {
    require('vue-particles');
  }

  export default {
    mounted() {
      if (window.particlesJS) {
        window.particlesJS.load();
      }
    },
  };
</script>
