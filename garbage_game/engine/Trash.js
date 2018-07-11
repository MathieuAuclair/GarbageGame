var spritesheet = document.getElementById('spritesheet');

//Some Sprite
var sprite = new Sprite(
	spritesheet, //image
	new Vector2d(100, 100), //clipping
	new Vector2d(50, 50),   //size
	new Vector2d(200, 200), //offset
	new Vector2d(50, 50)	//strech
);

//Create / Import required
var renderer = new Renderer();
var clickManager = new ClickManager();
var gameThread = new GameThread(100); //Execute game loop each 100 ms
var gameThreadCollision = new GameThread(10); //Check collision each 10 ms

//Event to clean canvas
var canvasCleaner = new DictionaryIndex('canvasCleaner', function (){
	renderer.clearCanvas();
});

//Rendering stuff on screen
var test = new DictionaryIndex('logger', function(){
	renderer.drawStrokeUiText(new Vector2d(100, 100), 'this is trash', '#FF0000', '50px verdana');
});

//Add button sprite
var button = new DictionaryIndex('button', function(){
	renderer.drawSprite(sprite);
});

//Add ClickEvent on Sprite
clickManager.suscribeClickBox(
	'deleteButton', 
	new Rectangle(sprite.size.x, sprite.size.y, sprite.offSet.x, sprite.offSet.y),
	function(){
		gameThread.unsubscribe('button');
	}
);


//Suscribe events
gameThread.suscribe(canvasCleaner);
gameThread.suscribe(button);
gameThread.suscribe(test);
