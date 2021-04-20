<template>
  <div class="layout">
    <Topnav class="nav" :toggle-aside-button-visible="true" :topnav-background="true" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li><router-link to="/doc/intro">介绍</router-link></li>
          <li><router-link to="/doc/install">快速上手</router-link></li>
          <li><router-link to="/doc/get-started">开始使用</router-link></li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    margin-top: 20px;
    flex-grow: 1;
    padding: 20px 200px 0 50px;
    background: white;
    overflow-x: hidden;
    overflow-y: auto;
    @media (max-width: 500px) {
      padding-right: 16px;
      padding-left: 16px;
    }
  }
}
aside {
  margin-top: 80px;
  background: white;
  width: 150px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 0 16px 0;
  height: 100%;
  z-index: 10;
  box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
  border-right: 1px solid #e8e8e8;
  > h2 {
    margin-bottom: 4px;
    line-height: 22px;
    padding: 10px;
    font-size: 16px;
    font-weight: 700;
  }

  > ol {
    > li {
      position: relative;
      width: 100%;
      font-size: 14px;
      >a{
        display: block;
        padding: 10px 16px;
        text-decoration: none;

        &:hover{
          background:#e6fafe ;
        }
      }
      .router-link-active{
        background: #e6fafe;
        border-right: 2px solid #00889c;
      }
    }
  }
  main{
    overflow: auto;
  }
}
</style>