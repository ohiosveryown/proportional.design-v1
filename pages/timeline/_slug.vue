<template>
  <div>
    <nuxt-link to="/">
      <button class="close">
        <svg width="14" height="14" fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.85 1.151a1.2 1.2 0 0 0-1.698 1.697L5.304 7 1.152 11.15a1.2 1.2 0 1 0 1.697 1.697l4.152-4.151 4.151 4.151a1.2 1.2 0 1 0 1.697-1.697L8.698 7l4.151-4.152a1.2 1.2 0 0 0-1.697-1.697L7.001 5.303 2.849 1.15Z"
            fill="#fff"
          />
        </svg>
      </button>
    </nuxt-link>
    <aside class="slide">
      <h1 class="title neuebit">{{ article.title }}</h1>
      <article class="p">
        <nuxt-content :document="article" />
      </article>
      <ul class="tags">
        <li v-if="article.tagOne">#{{ article.tagOne }}</li>
        <li v-if="article.tagTwo">#{{ article.tagTwo }}</li>
        <li v-if="article.tagThree">#{{ article.tagThree }}</li>
      </ul>
      <footer>
        <small class="time-date">
          {{ formatDate(article.createdAt) }}
          {{ formatTime(article.createdAt) }}
        </small>
        <small v-if="article.dimensions">{{ article.dimensions }}</small>
      </footer>

      <section>
        <contact class="primary" />
        <nuxt-link to="/">
          <button class="secondary neuebit uc">Go Back</button>
        </nuxt-link>
      </section>

      <section class="rating">
        <div class="question">
          <header>Care to rate this project?</header>
          <ul class="emojis">
            <li class="emoji">🔥</li>
            <li class="emoji">❤️</li>
            <li class="emoji">🤔</li>
            <li class="emoji">👎</li>
          </ul>
        </div>
        <div class="answer">
          Hey, thanks. I really appreciate the feedback 🙌.
        </div>
      </section>
    </aside>

    <main class="fade image-wrapper">
      <div v-if="article.imgOneOfOne" class="one">
        <img :src="`${article.imgOneOfOne}`" :alt="`${article.title}`" />
      </div>

      <div v-if="article.imgOneOfTwo" class="two">
        <img :src="`${article.imgOneOfTwo}`" :alt="`${article.title}`" />
        <img
          v-if="article.imgTwoOfTwo"
          :src="`${article.imgTwoOfTwo}`"
          :alt="`${article.title}`"
        />
      </div>

      <div v-if="article.imgOneOfThree" class="three">
        <img :src="`${article.imgOneOfThree}`" :alt="`${article.title}`" />
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

      <div v-if="article.imgOneOfFour" class="four">
        <img :src="`${article.imgOneOfFour}`" :alt="`${article.title}`" />
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
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";

  .close {
    position: fixed;
    z-index: var(--zmax);
    top: 2rem;
    left: 2rem;
    padding: 1.2rem 1.3rem 1rem;
    border-radius: 100%;
    background: rgba(38, 35, 34, 0.96);
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.64));
  }

  aside {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--zmax);
    padding: 3.2rem 3.6rem;
    width: 100vw;
    height: 30vh;
    overflow-y: scroll;
    color: #fff;
    background: linear-gradient(
      134.5deg,
      rgba(97, 86, 78, 0.82) 0%,
      rgba(12, 12, 14, 0.82) 69.19%
    );
    box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 0.24);
    backdrop-filter: blur(32px);
    border-radius: 20px 20px 0 0;

    @include breakpoint(md) {
      top: 0;
      right: 0;
      left: auto;
      padding-top: 5.6rem;
      border-radius: 20px 0 0 20px;
      width: 44vw;
      height: 100vh;
    }

    @include breakpoint(mdl) {
      padding-top: 5.6rem;
      width: 40vw;
    }
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

  .p {
    max-width: 47ch;
    @include breakpoint(mdl) {
      font-size: 1.8rem;
    }
    @include breakpoint(xl) {
      font-size: 2.6rem;
    }
  }

  .tags {
    display: flex;
    color: #e3d8ff;
    li {
      margin-right: 0.8rem;
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    margin-top: 3.2rem;
    font-size: 1.7rem;
    font-weight: 600;
    opacity: 0.64;
    @include breakpoint(md) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  .primary,
  .secondary {
    position: relative;
    margin: 4.8rem 2rem 4.8rem 0;
    bottom: auto;
    font-size: 1.8rem;
  }

  .secondary {
    width: max-content;
    padding: 1.6rem 0.2rem;
    border-radius: 16px;
    color: #fff;
    background: none;
  }

  @media (pointer: fine) {
    button:hover {
      transform: none;
    }

    .secondary:hover {
      text-decoration: underline;
    }
  }

  .rating {
    ul {
      display: flex;
      margin: 0.6rem 0 2rem;
    }

    li {
      margin-right: 0.6rem;
      padding: 0.8rem;
      border-radius: 100%;
      background: rgba(38, 36, 35, 0);
      transition: background 300ms ease;
      cursor: pointer;
    }
  }

  @media (pointer: fine) {
    .rating li:hover {
      background: rgba(38, 36, 35, 1);
    }
  }

  .question {
    transition: visibility 0ms, opacity 400ms ease;
  }

  .answer {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0ms, opacity 400ms ease;
  }

  .image-wrapper {
    overflow: scroll;
    width: 100%;
    height: 100vh;
  }

  .one {
    display: flex;
    align-items: center;
    height: 68%;
    @include breakpoint(md) {
      height: 100%;
    }
    img {
      margin: 0 auto;
      width: 84vw;
      height: 80%;
      object-fit: cover;
      filter: drop-shadow(0 4px 40px rgba(0, 0, 0, 0.25));
      @include breakpoint(md) {
        margin: 0;
        padding-left: 8vw;
        width: 52vw;
        height: 80%;
      }
    }
  }

  .two,
  .three,
  .four {
    display: flex;
    align-items: center;
    height: 68%;

    @include breakpoint(md) {
      height: 100%;
    }

    img {
      margin-right: 8vw;
      height: 80%;
      object-fit: cover;
      filter: drop-shadow(0 4px 40px rgba(0, 0, 0, 0.25));
      @include breakpoint(md) {
        height: 80%;
      }
    }

    img:first-of-type {
      padding-left: 8vw;
    }

    img:last-of-type {
      padding-right: 8vw;
      @include breakpoint(md) {
        padding-right: 48vw;
      }
    }
  }

  .slide {
    opacity: 0;
    animation: 500ms slide-up cubic-bezier(0.8, 0, 0.16, 1) 400ms forwards;
    @include breakpoint(md) {
      animation: 500ms slide-in cubic-bezier(0.8, 0, 0.16, 1) 600ms forwards;
    }
  }

  .fade {
    opacity: 0;
    animation: 500ms fade ease 150ms forwards;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(20vw);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(20vw);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>

<script>
  export default {
    layout: "slug",
    async asyncData({ $content, params, error }) {
      let article
      try {
        article = await $content("timeline", params.slug).fetch()
      } catch (e) {
        error({ message: "Timeline not found" })
      }
      return { article }
    },
    methods: {
      formatDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(date).toLocaleDateString("en", options)
      },
      formatTime(time) {
        return new Date(time).toLocaleTimeString("en", { timeStyle: "short" })
      },
      escape() {
        document.addEventListener("keydown", () => {
          if (event.key === "Escape") {
            this.$nuxt.$options.router.push("/")
          }
        })
      },
    },
    mounted() {
      this.escape()
      const emojis = document.querySelectorAll(".emoji")
      const question = document.querySelector(".question")
      const answer = document.querySelector(".answer")

      emojis.forEach((emoji) => {
        emoji.addEventListener("click", () => {
          question.style.display = "none"
          answer.style.display = "flex"

          answer.style.cssText = `
            visibility: visible;
            opacity: 1;
          `
        })
      })
    },
  }
</script>
