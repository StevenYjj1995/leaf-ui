<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>叶子UI</h1>
        <h2>基于Vue3的UI框架</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-light"></use>
    </svg>
  </div>

</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav}
};
</script>
<style lang="scss" scoped>
$color: #00889c;
.topnavAndBanner {
  background: rgb(234, 251, 255);
  background: linear-gradient(145deg, rgba(234, 251, 255, 1) 0%, rgba(102, 217, 220, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features{
  >svg{
    width: 64px;
    height: 64px;
  }
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #00b0b5;
      color: white;
      border-radius: 4px;
      display: inline-block;
      padding: 4px 20px;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
