
<template>
  <div class="home">
    <p class="test">Home</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  .test {
    font-size: 20px;
    color: white;
    line-height: 50px;
  }
}
</style>
