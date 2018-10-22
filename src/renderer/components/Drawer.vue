<template>
  <transition name="drawer" mode="out-in">
    <div id="drawer">
      <div class="drawer-item">A</div>
      <div class="drawer-item">B</div>
      <div class="drawer-item">C</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'drawer'
}
</script>

<style lang="scss">
@import "@/common.scss";

#drawer {
  padding: 10px;
  padding-top: 60px;
  box-sizing: border-box;
  position: fixed;
  left: 0px;
  width: 280px;
  height: 100%;
  z-index: 9997;
  background-color: #fff;
  border-radius: 0px 8px 8px 0px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);

  .drawer-item {
    cursor: pointer;
    background-color: $main-color;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 10px;
    box-sizing: border-box;
    margin: 22px auto;
    width: 180px;
    transition: .2s;

    &:hover {
      opacity: 0.7;
    }
  }
}

.drawer-enter-active, .drawer-leave-active {
  transition: .4s;
}

.drawer-enter, .drawer-leave-to {
  transform: translateX(-320px);
}
</style>
