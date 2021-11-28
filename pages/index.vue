<template>
  <main class="width">
    <intro />
    <projects />
    <projectsScroll />
    <contact />
    <timeline />
  </main>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";
</style>

<script>
  export default {
    // head() {
    //   return {
    //     script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    //   };
    // },
    beforeDestroy() {
      const getMain = document.querySelector("main")
      getMain.style.cssText = `
        opacity: 0;
        transition: all 200ms ease;
      `
    },
  }
</script>
