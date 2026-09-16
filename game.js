const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: "#88c070",

  physics: {
    default: "arcade"
  },

  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

let player;
let teacher;
let cursors;

function preload() {

  this.load.image(
    "player",
    "https://labs.phaser.io/assets/sprites/phaser-dude.png"
  );

  this.load.image(
    "teacher",
    "https://labs.phaser.io/assets/sprites/robot.png"
  );
}

function create() {

  player = this.physics.add.sprite(
    300,
    300,
    "player"
  );

  teacher = this.physics.add.staticSprite(
    600,
    300,
    "teacher"
  );

  cursors =
    this.input.keyboard.createCursorKeys();

  this.physics.add.overlap(
    player,
    teacher,
    talkTeacher,
    null,
    this
  );
}

function update() {

  player.setVelocity(0);

  const speed = 200;

  if(cursors.left.isDown)
      player.setVelocityX(-speed);

  if(cursors.right.isDown)
      player.setVelocityX(speed);

  if(cursors.up.isDown)
      player.setVelocityY(-speed);

  if(cursors.down.isDown)
      player.setVelocityY(speed);
}

function talkTeacher() {

  document.getElementById("dialog").innerHTML = `
    <h2>음악선생님</h2>
    <p>
    안녕~ 수학선생님이 몸이 안 좋아 보이는데
    교무실에 가서 확인해볼래?
    </p>
    <button onclick="closeDialog()">확인</button>
  `;

  document.getElementById("dialog").style.display =
    "block";
}

function closeDialog() {

  document.getElementById("dialog").style.display =
    "none";
}
