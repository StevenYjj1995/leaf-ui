<template>
  <div class="topnav" :class="{'topnav-background':topnavBackground}">
    <router-link to="/" class="logo"><svg class="icon" :class="{'logo-svg-run':logoRunVisible}">
      <use xlink:href="#icon-leaf"></use>
    </svg></router-link>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <svg v-if="toggleAsideButtonVisible" class="toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props:{
    toggleAsideButtonVisible:{
      type:Boolean,
      default:false
    },
    logoRunVisible:{
      type:Boolean,
      default:false
    },
    topnavBackground:{
      type:Boolean,
    }
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside}
  }
};
</script>
<style lang="scss" scoped>
$color:#00889c;
.topnav-background{
  background: white;
}
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgb(51 51 51 / 5%);
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > .logo-svg-run{
      -webkit-animation: rotate 10s linear infinite;
      @keyframes rotate {
        0%{
          transform:rotate(0deg);
          -ms-transform:rotate(0deg);
          -moz-transform:rotate(0deg);
          -o-transform:rotate(0deg);
        }
        100% {
          transform:rotate(360deg);
          -ms-transform:rotate(360deg);
          -moz-transform:rotate(360deg);
          -o-transform:rotate(360deg);
        }
      }
      @-webkit-keyframes rotate {
        0%{
          -moz-transform:rotate(0deg);
        }
        100%{
          -moz-transform:rotate(360deg);
        }
      }
    }
    > svg{
      width: 32px;
      height: 32px;
      color: $color;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside{
    width: 32px;
    height: 32px;
    background: fade-out($color,0.9);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    background: white;
    >.menu{
      display: none;
    }
    >.logo{
      margin: 0 auto;
    }
    >.toggleAside{
      display: inline-block;
    }
  }
}
</style>