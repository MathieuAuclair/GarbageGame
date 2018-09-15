const sprite_sheet = document.getElementById('spritesheet');
const sprite_sheet_texture_grass = document.getElementById('texture_grass');
const sprite_sheet_sky_box = document.getElementById('skybox');
const sprite_sheet_foreground = document.getElementById('foreground');
const sprite_sheet_foreground_decoration = document.getElementById('foreground_decoration');
const sprite_sheet_foreground_detail = document.getElementById('foreground_detail');

const texture_grass = new Sprite(
    sprite_sheet_texture_grass,
    new Vector2d(0, 0), //clipping
    new Vector2d(670, 252), //size
    new Vector2d(0, canvas.height * 0.7), //offset
    new Vector2d(canvas.width, canvas.height * 0.3) //strech
);

const foreground = new Sprite(
    sprite_sheet_foreground, //imageimage
    new Vector2d(0, 0), //clipping
    new Vector2d(272, 104), //size
    new Vector2d(0, 0), //offset
    new Vector2d(canvas.width, canvas.height * 0.7) //strech
);

const foreground_decoration = new Sprite(
    sprite_sheet_foreground_decoration, //imageimage
    new Vector2d(0, 0), //clipping
    new Vector2d(272, 150), //size
    new Vector2d(0, 0), //offset
    new Vector2d(canvas.width, canvas.height * 0.7) //strech
);

const foreground_detail = new Sprite(
    sprite_sheet_foreground_detail, //imageimage
    new Vector2d(0, 0), //clipping
    new Vector2d(213, 142), //size
    new Vector2d(0, 0), //offset
    new Vector2d(canvas.width, canvas.height * 0.7) //strech
);

const background = new Sprite(
    sprite_sheet_sky_box, //imageimage
    new Vector2d(0, 0), //clipping
    new Vector2d(272, 160), //size
    new Vector2d(0, 0), //offset
    new Vector2d(canvas.width, canvas.height) //strech
);

const backgroundRenderingTask = new DictionaryIndex('background', function () {
    renderer.drawSprite(background);
    renderer.drawSprite(texture_grass);
    renderer.drawSprite(foreground_detail);
    renderer.drawSprite(foreground_decoration);
    renderer.drawSprite(foreground);
});

const playerSprite = new Sprite(
    sprite_sheet, //image
    new Vector2d(0, 100), //clipping
    new Vector2d(100, 100), //size
    new Vector2d(100, canvas.height - 150), //offset
    new Vector2d(70, 70), //strech
);