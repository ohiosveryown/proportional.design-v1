<template>
  <div>
    <h2>{{ article.title }}</h2>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params, error }) {
      let article
      try {
        article = await $content("projects", params.slug).fetch()
      } catch (e) {
        error({ message: "Projects not found" })
      }
      return { article }
    },
  }
</script>
