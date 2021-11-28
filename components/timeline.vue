<template>
  <section>
    <header class="section-header">
      <span
        class="trigger"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        Timeline
      </span>
      <span :class="{ hoverStyle: hover }" class="tooltip">
        This is where I post updates of projects – in a timeline ⏱️</span
      >
    </header>
    <ul>
      <li class="entry" v-for="article of articles" :key="article.slug">
        <NuxtLink :to="article.slug">
          <header class="title neuebit">
            {{ article.title }}
          </header>
          <p class="description">{{ article.description }}</p>
          <ul class="tags">
            <li v-if="article.tagOne">#{{ article.tagOne }}</li>
            <li v-if="article.tagTwo">#{{ article.tagTwo }}</li>
            <li v-if="article.tagThree">#{{ article.tagThree }}</li>
          </ul>

          <div class="image-wrapper">
            <div class="one">
              <img
                v-if="article.imgOneOfOne"
                :src="`${article.imgOneOfOne}`"
                :alt="`${article.title}`"
              />
            </div>

            <div class="two">
              <img
                v-if="article.imgOneOfTwo"
                :src="`${article.imgOneOfTwo}`"
                :alt="`${article.title}`"
              />
              <img
                v-if="article.imgTwoOfTwo"
                :src="`${article.imgTwoOfTwo}`"
                :alt="`${article.title}`"
              />
            </div>

            <div class="three">
              <img
                v-if="article.imgOneOfThree"
                :src="`${article.imgOneOfThree}`"
                :alt="`${article.title}`"
              />
              <img
                v-if="article.imgTwoOfThree"
                :src="`${article.imgTwoOfThree}`"
                :alt="`${article.title}`"
              />
              <img
                v-if="article.imgThreeOfThree"
                :src="`${article.imgThreeOfThree}`"
                :alt="`${article.title}`"
              />
            </div>

            <div class="four">
              <img
                v-if="article.imgOneOfFour"
                :src="`${article.imgOneOfFour}`"
                :alt="`${article.title}`"
              />
              <img
                v-if="article.imgTwoOfFour"
                :src="`${article.imgTwoOfFour}`"
                :alt="`${article.title}`"
              />
              <img
                v-if="article.imgThreeOfFour"
                :src="`${article.imgThreeOfFour}`"
                :alt="`${article.title}`"
              />
              <img
                v-if="article.imgFourOfFour"
                :src="`${article.imgFourOfFour}`"
                :alt="`${article.title}`"
              />
            </div>
          </div>

          <footer>
            <small class="time-date">
              {{ formatDate(article.createdAt) }}
              {{ formatTime(article.createdAt) }}
            </small>
            <small v-if="article.dimensions">{{ article.dimensions }}</small>
          </footer>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  section {
    position: relative;
    z-index: var(--z2);
  }

  .section-header {
    padding-bottom: 2rem;
    color: #848f9e;
    font-size: 1.3rem;
    font-weight: 500;
  }

  .trigger {
    padding: 2.8rem 0;
    cursor: context-menu;
  }

  .title {
    margin-bottom: 1.2rem;
    font-size: 4.4rem;
    line-height: 0.8;
    @include breakpoint(md) {
      font-size: 3.8vw;
    }
    @include breakpoint(lg) {
      font-size: 3.4vw;
    }
  }

  .entry {
    position: relative;
    z-index: var(--z2);
    margin-bottom: 4rem;
    padding: 3.2rem 2rem 2.4rem;
    border-radius: 2.2rem;
    color: #fff;
    background: linear-gradient(
      134deg,
      rgba(97, 86, 78, 0.8) 0%,
      rgba(12, 12, 14, 0.88) 69%
    );
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
    filter: drop-shadow(0 4px 28px rgba(0, 0, 0, 0.24));
    backdrop-filter: blur(8px);
    @include breakpoint(md) {
      padding: 3.2rem 3.2rem 2.4rem;
    }
    @include breakpoint(mdl) {
      padding: 4rem 3.2rem 2.4rem;
    }
    p {
      max-width: 47ch;
      @include breakpoint(mdl) {
        font-size: 1.8rem;
      }
      @include breakpoint(xl) {
        font-size: 2.6rem;
      }
    }
  }

  .description {
    // margin-bottom: 2rem;
    @include breakpoint(mdl) {
      margin-bottom: 0.4rem;
    }
  }

  .tags {
    display: flex;
    color: #e3d8ff;
    li {
      margin-right: 0.8rem;
    }
  }

  .image-wrapper {
    margin: 2rem 0;
  }

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
    @include breakpoint(md) {
      display: inline-block;
    }
  }

  .hoverStyle {
    opacity: 1;
    animation: moveit 900ms ease forwards;
    will-change: transform;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .one {
    border-radius: 16px;
    overflow: hidden;
    max-height: 40vh;
    @include breakpoint(mdl) {
      max-height: 50vh;
    }
  }

  .two {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 6px;
    border-radius: 16px;
    overflow: hidden;

    img:nth-of-type(1) {
      /* grid-area: 1 / 1 / 3 / 2; */
    }

    img:nth-of-type(2) {
      /* grid-area: 1 / 2 / 2 / 3; */
    }
  }

  .three {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 50%);
    grid-gap: 6px;
    border-radius: 16px;
    max-height: 40vh;
    overflow: hidden;
    @include breakpoint(mdl) {
      max-height: 54vh;
    }

    img:nth-of-type(1) {
      grid-area: 1 / 1 / 3 / 2;
    }

    img:nth-of-type(2) {
      grid-area: 1 / 2 / 2 / 3;
    }

    img:nth-of-type(3) {
      grid-area: 2 / 2 / 3 / 3;
    }
  }

  .four {
    display: grid;
    grid-gap: 6px;
    grid-template-columns: repeat(2, 1fr);
    border-radius: 16px;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    opacity: 0.48;
    @include breakpoint(md) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .time-date {
    display: flex;
    font-weight: 600;
  }
</style>

<script>
  export default {
    data: () => ({
      articles: null,
      hover: false,
    }),
    async fetch() {
      this.articles = await this.$content("timeline", { deep: true })
        .sortBy("createdAt", "desc")
        // .skip(1)
        // .where({ hero: 'yes' })
        .fetch()
    },
    methods: {
      formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(date).toLocaleDateString("en", options)
      },
      formatTime(time) {
        return new Date(time).toLocaleTimeString("en", { timeStyle: "short" })
      },
    },
  }
</script>
