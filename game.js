const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  physics: {
    default: "arcade"
  },
  scene: {
    preload,
    create,
    update
  }
};

new Phaser.Game(config);
