<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@/components/Header.vue";
@Component({
  components: {
    AppHeader
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: "PingFangSC-Regular", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $bodyColor;
}
</style>
