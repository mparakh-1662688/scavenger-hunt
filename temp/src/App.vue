/* eslint-disable import/prefer-default-export*/
/* eslint-disable */

<template>
  <div id="app">
    <div><video ref="video" id="video" width="640" height="480" autoplay></video></div>
    <div><button id="snap" v-on:click="capture()">Snap Photo</button></div>
    <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
    <ul>
      <li v-for="c in captures" 
          :key="c.id">
        <img v-bind:src="c" height="50" />
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disablet*/
module.exports = 4;
export default {
  name: 'app',
  data() {
    return {
      video: {},
      canvas: {},
      captures: []
    }
  },
  mounted() {
    this.video = this.$refs.video
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          this.video.srcObject = stream
          this.video.play()
      });
    }
  },
  methods: {
    capture() {
      this.canvas = this.$refs.canvas
      var context = this.canvas.getContext(`2d`).drawImage(this.video, 0, 0, 640, 480)
      this.captures.push(canvas.toDataURL(`image/png`))
      console.log(this.captures)
    }
  }
}
</script>

<style>
body: {
    background-color: #F0F0F0;
}
#app {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
#video {
    background-color: #000000;
}
#canvas {
    display: none;
}
li {
    display: inline;
    padding: 5px;
}
</style>