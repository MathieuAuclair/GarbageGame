const sprite_sheet = document.getElementById('spritesheet');
const sprite_sheet_texture_grass = document.getElementById('texture_grass');
const sprite_sheet_sky_box = document.getElementById('skybox');
const sprite_sheet_foreground = document.getElementById('foreground');
const sprite_sheet_foreground_decoration = document.getElementById('foreground_decoration');
const sprite_sheet_foreground_detail = document.getElementById('foreground_detail');
const sprite_sheet_car = document.getElementById("car");

const car = new Sprite(
    sprite_sheet_car,
    new Vector2d(0, 0), //clipping
    new Vector2d(800, 800), //size
    new Vector2d(canvas.width - 250, canvas.height * 0.7), //offset
    new Vector2d(200, 200) //stretch
);

const texture_grass = new Sprite(
    sprite_sheet_texture_grass,
    new Vector2d(0, 0), //clipping
    new Vector2d(670, 252), //size
    new Vector2d(0, canvas.height * 0.7), //offset
    new Vector2d(canvas.width, canvas.height * 0.3) //stretch
);

const foreground = new Sprite(
    sprite_sheet_foreground, //image
    new Vector2d(0, 0), //clipping
    new Vector2d(272, 104), //size
    new Vector2d(0, 0), //offset
    new Vector2d(canvas.width, canvas.height * 0.7) //stretch
);

const foreground_decoration = new Sprite(
    sprite_sheet_foreground_decoration, //image
    new Vector2d(0, 0), //clipping
    new Vector2d(272, 150), //size
    new Vector2d(0, 0), //offset
    new Vector2d(canvas.width, canvas.height * 0.7) //stretch
);

const foreground_detail = new Sprite(
    sprite_sheet_foreground_detail, //image
    new Vector2d(0, 0), //clipping
    new Vector2d(213, 142), //size
    new Vector2d(0, 0), //offset
    new Vector2d(canvas.width, canvas.height * 0.7) //stretch
);

const background = new Sprite(
    sprite_sheet_sky_box, //image
    new Vector2d(0, 0), //clipping
    new Vector2d(272, 160), //size
    new Vector2d(0, 0), //offset
    new Vector2d(canvas.width, canvas.height) //stretch
);

const playerSprite = new Sprite(
    sprite_sheet, //image
    new Vector2d(0, 100), //clipping
    new Vector2d(100, 100), //size
    new Vector2d(100, canvas.height - 150), //offset
    new Vector2d(70, 70), //stretch
);