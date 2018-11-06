<template>
  <div id="main" class="content">
    <div class="panel">
      <button :class="started ? 'start-button start' : 'start-button'" @click="start">
        {{ startButton }}
      </button>
      <span v-if="started" class=""></span>
    </div>
    <div class="panel">
      메인화면
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-main',
  data () {
    return {
      started: false
    }
  },
  computed: {
    startButton () {
      return this.started ? 'Stop' : 'Start'
    }
  },
  methods: {
    start () {
      this.started = !this.started
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
  outline: none;
  cursor: pointer;
  border: 1px solid $main-color;
  background-color: #fff;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 20px 0;
  font-size: 1.8rem;
  font-weight: bold;
  transition: .2s;

  &:hover {
    box-shadow: 0px 0px 40px $main-color;
    background-color: #fff;
    color: $main-color;
    transform: scale(1.1);
  }

  &.start {
    border: none;
    box-shadow: 0px 0px 20px $main-color; 
    animation: active-animation 1s alternate infinite;
  }
}

@keyframes active-animation {
  0% {
    background-color: #fff;
    color: #000;
  }

  100% {
    background-color: $main-color;
    color: #fff;
  }
}
</style>
