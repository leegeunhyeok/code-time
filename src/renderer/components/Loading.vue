<template>
  <transition name="fade" mode="out-in">
    <div id="loading">Loading</div>
  </transition>
</template>

<script>
export default {
  name: 'loading',
  created () {
    this.$store.commit('LOAD_DONE')
  }
}
</script>

<style lang="scss">
@import "@/common.scss";

#loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  color: $main-color;
  z-index: 9999;
}
</style>
