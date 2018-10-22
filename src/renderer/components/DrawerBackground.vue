<template>
  <transition name="fade" mode="out-in">
    <div id="drawer-background"></div>
  </transition>
</template>

<script>
export default {
  name: 'drawer-background'
}
</script>

<style>
#drawer-background {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9997;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
