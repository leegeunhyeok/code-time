<template>
  <div id="app">
    <app-loading v-if="loading"/>
    <app-drawer-background v-if="drawerOpenState"/>
    <app-drawer v-if="drawerOpenState"/>
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue'
import Header from '@/components/Header.vue'
import Drawer from '@/components/Drawer.vue'
import DrawerBackground from '@/components/DrawerBackground.vue'

export default {
  name: 'code-time',
  components: {
    'app-loading': Loading,
    'app-header': Header,
    'app-drawer': Drawer,
    'app-drawer-background': DrawerBackground
  },
  computed: {
    loading () {
      return !this.$store.state.loading
    },
    drawerOpenState () {
      return this.$store.state.drawer
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "NanumSquareRound";
  src:url('./assets/fonts/NanumSquareRoundR.eot');
  src:url('./assets/fonts/NanumSquareRoundR.eot#iefix') format('embedded-opentype'),
  url('./assets/fonts/NanumSquareRoundR.woff') format('woff'),
  url('./assets/fonts/NanumSquareRoundR.ttf') format('truetype');
  src:local(¡Ø), url('./assets/fonts/NanumSquareRoundR.woff') format('woff');
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-family: 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif';
  background-color: #fff;
  font-family: "NanumSquareRound";
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
