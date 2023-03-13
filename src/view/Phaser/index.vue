<template>
  <div id="phaser"></div>
</template>

<script lang="ts" setup>
import Phaser from 'phaser'

function preload () {
  // 预加载
  this.load.image('sky', 'assets/sky.png')
  this.load.image('ground', 'assets/platform.png')
  this.load.image('star', 'assets/star.png')
  this.load.image('bomb', 'assets/bomb.png')
  this.load.spritesheet('dude',
      'assets/dude.png',
      { frameWidth: 32, frameHeight: 48 }
  )
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser',
  width: 800,
  height: 600,
  scene: {
    preload () {
    },
    create () {},
    update () {}
  }
}

// eslint-disable-next-line
const game = new Phaser.Game(config)
</script>

<style lang="less" scoped>
</style>
