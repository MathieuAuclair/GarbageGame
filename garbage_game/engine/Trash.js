var spritesheet = document.getElementById('spritesheet');
var spritesheet_texture_grass = document.getElementById('texture_grass');
var spritesheet_skybox = document.getElementById('skybox');
var spritesheet_foreground = document.getElementById('foreground');
var spritesheet_foreground_decoration = document.getElementById('foreground_decoration');
var spritesheet_foreground_detail = document.getElementById('foreground_detail');

//Create / Import required
var renderer = new Renderer();
var clickManager = new ClickManager();
var animatorThread = new GameThread(100); //Execute game loop each 200 ms
var gameThread = new GameThread(100); //Execute game loop each 100 ms
var gameThreadMovement = new GameThread(10); //Execute game loop each 50 ms
var gameThreadCollision = new GameThread(10); //Check collision each 10 ms

//Event to clean canvas
var canvasCleaner = new DictionaryIndex('canvasCleaner', function () {
	renderer.clearCanvas();
});

var texture_grass = new Sprite(
	spritesheet_texture_grass,
	new Vector2d(0, 0), //clipping
	new Vector2d(670, 252), //size
	new Vector2d(0, canvas.height * 0.7), //offset
	new Vector2d(canvas.width, canvas.height * 0.3) //strech
);

var foreground = new Sprite(
	spritesheet_foreground, //imageimage
	new Vector2d(0, 0), //clipping
	new Vector2d(272, 104), //size
	new Vector2d(0, 0), //offset
	new Vector2d(canvas.width, canvas.height * 0.7) //strech
);

var foreground_decoration = new Sprite(
	spritesheet_foreground_decoration, //imageimage
	new Vector2d(0, 0), //clipping
	new Vector2d(272, 150), //size
	new Vector2d(0, 0), //offset
	new Vector2d(canvas.width, canvas.height * 0.7) //strech
);

var foreground_detail = new Sprite(
	spritesheet_foreground_detail, //imageimage
	new Vector2d(0, 0), //clipping
	new Vector2d(213, 142), //size
	new Vector2d(0, 0), //offset
	new Vector2d(canvas.width, canvas.height * 0.7) //strech
);

var background = new Sprite(
	spritesheet_skybox, //imageimage
	new Vector2d(0, 0), //clipping
	new Vector2d(272, 160), //size
	new Vector2d(0, 0), //offset
	new Vector2d(canvas.width, canvas.height) //strech
);

var backgroundRenderer = new DictionaryIndex('background', function ()  {
	renderer.drawSprite(background);
	renderer.drawSprite(texture_grass);
	renderer.drawSprite(foreground_detail);
	renderer.drawSprite(foreground_decoration);
	renderer.drawSprite(foreground);
});

stringLastMovement = "No stats to show";

var text = new DictionaryIndex('logger', function () {
	renderer.drawUiText(new Vector2d(25, (canvas.height - 10)), stringLastMovement, 'white', '20px impact');
	renderer.drawUiText(new Vector2d(25, 60), 'A garbage game for', 'white', '50px impact');
	renderer.drawUiText(new Vector2d(25, 120), 'a garbage soldier', 'white', '50px impact');
});

const SPRITE_CLIPPING_SIZE = new Vector2d(100, 100);

var sprite = new Sprite(
	spritesheet, //image
	new Vector2d(0, 100), //clipping
	new Vector2d(100, 100), //size
	new Vector2d(100, canvas.height - 150), //offset
	new Vector2d(50, 50), //strech
);

var animator = new DictionaryIndex("animator", function () {
	sprite.clipping.x += SPRITE_CLIPPING_SIZE.x;

	if (sprite.clipping.x / SPRITE_CLIPPING_SIZE.x > 5) {
		sprite.clipping.x = 0;
	}
});

//Add button sprite
var character = new DictionaryIndex('button', function () {
	renderer.drawSprite(sprite);
});

const MOVEMENT_SCALE_VALUE = 1;

//setControlKey
plugActionToInput(37, function (keyState) {
	movement(function () {
		sprite.clipping.y = 300;
		sprite.offSet.x -= MOVEMENT_SCALE_VALUE;
	}, keyState);
});

plugActionToInput(38, function (keyState) {
	movement(function () {
		sprite.clipping.y = 200;
		sprite.offSet.y -= MOVEMENT_SCALE_VALUE;
	}, keyState);
});

plugActionToInput(39, function (keyState) {
	movement(function () {
		sprite.clipping.y = 100;
		sprite.offSet.x += MOVEMENT_SCALE_VALUE;
	}, keyState);
});

plugActionToInput(40, function (keyState) {
	movement(function () {
		sprite.clipping.y = 0;
		sprite.offSet.y += MOVEMENT_SCALE_VALUE;
	}, keyState);
});

function movement(action, keyState) {
	if (keyState && !gameThreadMovement.hasEvent("movement")) {
		animatorThread.suscribe(animator);
		gameThreadMovement.suscribe(
			new DictionaryIndex("movement", action)
		);
	} else {
		animatorThread.unsubscribe("animator");
		gameThreadMovement.unsubscribe("movement");
	}
}



//Suscribe events
gameThread.suscribe(canvasCleaner);
gameThread.suscribe(backgroundRenderer);
gameThread.suscribe(text);
gameThread.suscribe(character);