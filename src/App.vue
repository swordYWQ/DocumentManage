<template>
  <div id="app">
    <d-header></d-header>
    <div class="main">
      <d-sidebar></d-sidebar>
      <d-content></d-content>
      <!--<router-view></router-view>-->
    </div>
  </div>
</template>

<script>
import './assets/scss/index.scss'
import Header from './views/layout/header.vue'
import Sidebar from './views/layout/sidebar.vue'
import Content from './views/layout/content.vue'
export default {
  name: 'app',
  components: {
    'd-header': Header,
    'd-sidebar': Sidebar,
    'd-content': Content
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.main {
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden;
  /* position: absolute;
  top: 50px;
  left: 0; */
  margin-top: 50px;
}
</style>
