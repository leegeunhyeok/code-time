<template>
  <transition name="fade" mode="out-in">
    <div id="loading">Code Time
      <div id="loading-area">
        <span class="loading-icon"></span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'loading',
  created () {
    setTimeout(() => {
      this.$store.commit('LOAD_DONE')
    }, 1000)
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
  background-color: $main-color;
  color: #fff;
  overflow: hidden;
  line-height: 500px;
  text-align: center;
  font-weight: bold;
  font-size: 3rem;
  z-index: 9999;

  #loading-area {
    position: fixed;
    top: 56%;
    left: 50%;
    transform: translate(-50%, -50%);

    .loading-icon {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      border: 3px solid #fff;
      width: 0px;
      height: 0px;
      margin: auto;
      display: block;
      animation: loading 1.5s linear infinite;
    }
  }
}

@keyframes loading {
  to {
    width: 30px;
    height: 30px;
    opacity: 0; 
  }
}
</style>
