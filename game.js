const config = {
    type: Phaser.AUTO,

    width: 1200,
    height: 700,

    backgroundColor: '#5cb85c',

    physics: {
        default: 'arcade'
    },

    scene: {
        preload,
        create,
        update
    }
};

new Phaser.Game(config);

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
        200,
        300,
        "player"
    );

    teacher = this.physics.add.staticSprite(
        700,
        300,
        "teacher"
    );

    cursors =
        this.input.keyboard.createCursorKeys();

    this.interactKey =
        this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.E
        );
}



function update() {

    player.setVelocity(0);

    const speed = 200;

    if (cursors.left.isDown)
        player.setVelocityX(-speed);

    if (cursors.right.isDown)
        player.setVelocityX(speed);

    if (cursors.up.isDown)
        player.setVelocityY(-speed);

    if (cursors.down.isDown)
        player.setVelocityY(speed);

    checkNPC();
}



function checkNPC() {

    const distance = Phaser.Math.Distance.Between(
        player.x,
        player.y,
        teacher.x,
        teacher.y
    );

    if (
        distance < 100 &&
        Phaser.Input.Keyboard.JustDown(
            game.scene.keys.defaultScene?.interactKey
        )
    ) {
        openDialog();
    }
}


function openDialog() {

    document.getElementById("dialog").innerHTML = `
        <h2>음악선생님</h2>

        <p>
        안녕~ 그런데 아까 보니까
        수학선생님이 몸이 안 좋아 보이던데
        교무실 가서 확인해볼래?
        </p>

        <button onclick="closeDialog()">
        확인
        </button>
    `;

    document.getElementById("dialog").style.display =
        "block";
}

function closeDialog() {

    document.getElementById("dialog").style.display =
        "none";
}