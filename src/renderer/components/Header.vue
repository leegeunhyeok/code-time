<template>
  <div id="header">
    <div id="header-button" 
      :class="drawerOpenState ? 'close' : ''"
      @click="drawerToggle">
      <span id="i-1" class="icon"></span>
      <span id="i-2" class="icon"></span>
      <span id="i-3" class="icon"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data () {
    return {
      open: true
    }
  },
  computed: {
    drawerOpenState () {
      return this.$store.state.drawerOpen
    }
  },
  methods: {
    drawerToggle () {
      this.$store.commit('DRAWER_TOGGLE')
    }
  }
}
</script>

<style lang="scss">
@import "@/common.scss";

#header {
  position: fixed;
  width: 100%;
  height: 60px;
  z-index: 9998;

  #header-button {
    cursor: pointer;
    width: 60px;
    height: 60px;
    position: relative;

    #i-1 {
      top: 18px;
    }

    #i-2 {
      top: 28px;
    }

    #i-3 {
      top: 38px;
    }

    .icon {
      pointer-events: none;
      left: 15px;
      position: absolute;
      width: 30px;
      height: 4px;
      display: block;
      background-color: $main-color;
      transition: .2s;
    }

    &.close {
      #i-1 {
        top: 28px;
        transform: rotate(-45deg);
      }

      #i-2 {
        opacity: 0;
      }

      #i-3 {
        top: 28px;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
