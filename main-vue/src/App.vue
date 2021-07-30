<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <div id="subapp-viewport"></div>
  </div>
</template>

<script>
import { registerMicroApps, start } from 'qiankun';
import microApps from './micro-app';

export default {
  mounted () {
    registerMicroApps(microApps);
    start();
  }
}
</script>


<style lang="scss">
</style>
