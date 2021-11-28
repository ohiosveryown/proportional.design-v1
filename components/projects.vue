<template>
  <section>
    <header>
      <span @mouseenter="hover = true" @mouseleave="hover = false"
        >Finished Projects</span
      >
      <span :class="{ hoverStyle: hover }" class="tooltip">
        Here are some projects I've wrapped up recently 📏</span
      >
    </header>
    <ul>
      <li v-for="article of articles" :key="article.slug">
        <NuxtLink :to="article.slug">
          <img :src="`${article.hero}`" />
          <span class="title">{{ article.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";
  @media (pointer: coarse) {
    .tooltip {
      display: none;
    }
  }

  .tooltip {
    display: none;
    margin-left: 1.2rem;
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    font-size: 1.3rem;
    color: #fff;
    background: #292726;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.32);
    transition: all 300ms ease;
    opacity: 0;
    animation: moveitback 400ms ease forwards;
    will-change: transform;
    @include breakpoint(sm) {
      display: inline-block;
    }
  }

  .hoverStyle {
    opacity: 1;
    animation: moveit 900ms ease forwards;
    will-change: transform;
  }

  section {
    position: relative;
    z-index: var(--z1);
    margin-bottom: 5.6rem;
  }

  header {
    margin-bottom: 2.4rem;
    font-size: 1.3rem;
    font-weight: 500;
    color: #848f9e;
    span {
      cursor: context-menu;
    }
  }

  ul {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 28%);
    // grid-template-columns: repeat(5, 1fr);
    justify-content: space-between;
    margin: 0 auto;
    @include breakpoint(sm) {
      grid-template-columns: repeat(auto-fill, 16%);
    }
  }

  li:hover img {
    transform: rotate(3deg);
  }

  img {
    border-radius: 100px;
    transition: transform 300ms ease;
    will-change: transform;
  }

  .title {
    display: block;
    text-align: center;
    margin: 1.2rem 0 3.2rem;
    text-shadow: 0px 0px 18px rgba(0, 0, 0, 0.34);
  }
</style>

<script>
  export default {
    data: () => ({
      articles: null,
      hover: false,
    }),
    async fetch() {
      this.articles = await this.$content("projects", { deep: true })
        .sortBy("createdAt", "desc")
        // .skip(1)
        // .where({ hero: 'yes' })
        .fetch()
    },
  }
</script>
