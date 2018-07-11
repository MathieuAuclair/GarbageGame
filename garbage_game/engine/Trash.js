var spritesheet = document.getElementById('spritesheet');

//Random Sprite
var sprite = new Sprite(
	spritesheet, //image
	new Vector2d(100, 100), //clipping
	new Vector2d(50, 50),   //size
	new Vector2d(200, 200), //offset
	new Vector2d(50, 50)	//strech
);


//Create
var renderer = new Renderer();
var gameThread = new GameThread(100);

//Event
var canvasCleaner = new DictionaryIndex('canvasCleaner', function (){
	renderer.clearCanvas();
});

var test = new DictionaryIndex('logger', function(){
	renderer.drawStrokeUiText(new Vector2d(100, 100), 'this is trash', '#FF0000', '50px verdana');
	renderer.drawSprite(sprite);
});

//Suscribe
gameThread.suscribe(canvasCleaner);
gameThread.suscribe(test);
