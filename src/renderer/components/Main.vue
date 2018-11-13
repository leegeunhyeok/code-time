<template>
  <div id="main" class="content">
    <div class="panel">
      <button :class="started ? 'start-button start' : 'start-button'" @click="startToggle">
        <transition name="fade" mode="out-in">
          <div class="wrap-wave idle" v-if="!started" :key="'idle'">
            <div class="wave w0"></div>
            <div class="title">{{ startButton }}</div>
          </div>
          <div class="wrap-wave running" v-else :key="'running'">
            <div class="wave w1"></div>
            <div class="wave w2"></div>
            <div class="wave w3"></div>
            <div class="title">{{ startButton }}</div>
          </div>
        </transition>
      </button>
      <div :class="started ? 'time-area running' : 'time-area'">{{ timeFormat }}</div>
    </div>
    <div class="panel">
      메인화면
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-main',
  computed: {
    started () {
      return this.$store.state.started
    },
    startButton () {
      return this.started ? 'Stop' : 'Start'
    },
    timeFormat () {
      return this.$store.state.data['total']
    }
  },
  methods: {
    startToggle () {
      this.$store.commit('START_TOGGLE')
      try {
        clearInterval(this.timer)
      } catch (e) { }

      if (this.$store.state.started) {
        this.timer = setInterval(() => {
          this.$store.commit('TIME_INCRESE')
        }, 1000)
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/common.scss";

#main {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  text-align: center;
}

.start-button {
  cursor: pointer;
  outline: none;
  background-color: #fff;
  border-radius: 50%;
  border: none;
  width: 200px;
  height: 200px;
  margin: 20px 0;
  font-size: 1.8rem;
  font-weight: bold;
  transition: .2s;
  padding: 0;
  box-shadow: 0px 0px 1px $main-color;
}

.wrap-wave {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  transition: .2s;
  box-shadow: 0px 0px 20px $main-color;

  .title {
    pointer-events: none;
    position: absolute;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    box-shadow: 0px 0px 40px $main-color; 
  }

  &.idle {
    background-color: $main-color;
  }

  &.running {
    background-color: #fff;
  }

  .w0 {
    top: 0;
    width: 200px;
    height: 200px;
  }

  .wave {
    pointer-events: none;
    border-radius: 43%;
    position: absolute;
    width: 500px;
    height: 500px;
    bottom: -370px;
    left: -150px;
  }

  .w1 {
    animation: drift 4s infinite linear;
    background-color: $main-color;
  }

  .w2 {
    animation: drift 5.5s infinite linear;
    opacity: .3;
    background-color: lighten($main-color, 10%);
  }

  .w3 {
    animation: drift 7s infinite linear;
    opacity: .3;
    background-color: lighten($main-color, 10%);
  }
}

@keyframes drift {

  from {
    transform: rotate(0deg); 
  }

  from {
    transform: rotate(360deg);
  }
}

.time-area {
  color: #888;
  font-size: 1.6rem;
  transition: .3s;

  &.running {
    color: $main-color;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
