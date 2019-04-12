<template>
  <div class="header">
    <h1>This is an header page</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Header extends Vue {}
</script>

<style scoped lang="scss">
.header {
  h1 {
    font-size: 20px;
    color: white;
    line-height: 50px;
  }
}
</style>
