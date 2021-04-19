<template>
  <div class="topnav">
    <div class="logo"><svg class="icon" :class="{'logo-svg-run':logoRunVisible}">
      <use xlink:href="#icon-leaf"></use>
    </svg></div>
    <ul class="menu">
      <router-link to="/doc">文档</router-link>
    </ul>
    <span v-if="toggleAsideButtonVisible" class="toggleAside" @click="toggleAside"></span>
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
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;

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
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
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