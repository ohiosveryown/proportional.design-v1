<template>
  <section class="projects">
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

  section {
    position: relative;
    opacity: 0;
    pointer-events: none;
    transition: all 300ms ease;
  }

  .scroll-class {
    opacity: 1;
    pointer-events: inherit;
  }

  li {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 6vw;
    height: auto;
    opacity: 1;
    &:hover {
      opacity: 1;
    }
    @include breakpoint(mdl) {
      display: inherit;
    }
  }

  img {
    transform: scale(0.8);
    animation: float 5s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translatey(0) scale(0.8);
    }
    50% {
      transform: translatey(-0.8rem) scale(0.8);
    }
    100% {
      transform: translatey(0) scale(0.8);
    }
  }

  li:nth-of-type(1) {
    top: 6vh;
    left: 4vw;
  }

  li:nth-of-type(2) {
    top: 12vh;
    left: 12vw;
  }

  li:nth-of-type(3) {
    top: 25vh;
    left: 6vw;
  }

  li:nth-of-type(4) {
    opacity: 0;
    top: 32vh;
    left: 12vw;
  }

  li:nth-of-type(5) {
    top: 4vh;
    left: 80vw;
  }

  li:nth-of-type(6) {
    top: 13vh;
    left: 90vw;
  }

  li:nth-of-type(7) {
    top: 24vh;
    left: 83vw;
  }

  li:nth-of-type(n + 8) {
    display: none;
  }

  li:hover img {
    transform: scale(0.8) rotate(3deg);
  }

  img {
    border-radius: 100px;
    transition: transform 300ms ease;
    will-change: transform;
  }

  span {
    display: block;
    margin-top: 0.2rem;
    text-align: center;
    /* font-size: 1.3rem; */
    text-shadow: 0px 0px 18px rgba(0, 0, 0, 0.34);

    font-size: 1.5rem;
    animation: float 5s ease-in-out infinite;
  }
</style>

<script>
  export default {
    data: () => ({
      articles: null,
    }),
    async fetch() {
      this.articles = await this.$content("projects", { deep: true })
        .sortBy("createdAt", "desc")
        // .skip(1)
        // .where({ hero: 'yes' })
        .fetch()
    },
    methods: {
      handle() {
        const projects = document.querySelector(".projects")
        window.addEventListener(
          "scroll",
          () => {
            let scrollpos = window.scrollY
            if (scrollpos >= 800) {
              projects.classList.add("scroll-class")
            } else {
              projects.classList.remove("scroll-class")
            }
          },
          {
            capture: true,
            passive: true,
          }
        )
      },
    },
    mounted() {
      this.handle()
    },
  }
</script>
