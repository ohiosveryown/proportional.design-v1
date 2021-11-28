<template>
  <button class="neuebit uc">Contact</button>
</template>

<style lang="scss" scoped>
  @import "~static/style/grid.scss";
  button {
    position: fixed;
    z-index: var(--zmax);
    bottom: 1.6rem;
    left: 0;
    right: 0;
    margin: auto;
    width: max-content;
    padding: 1.6rem 2rem;
    border-radius: 16px;
    color: #fff;
    font-size: 2.2rem;
    background: rgba(38, 35, 34, 0.96);
    box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.4);
    transform-origin: bottom;
    transition: transform 300ms ease;
    will-change: transform;
  }

  @media (pointer: fine) {
    button:hover {
      transform: scale(1.1);
    }
  }
</style>

<script>
  export default {}
</script>
