const config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 700,
    backgroundColor: "#5cb85c",
    scene: {
        create: create
    }
};

new Phaser.Game(config);

function create() {

    this.add.text(
        400,
        300,
        "소화기관 RPG",
        {
            fontSize: "40px",
            color: "#ffffff"
        }
    );

}
