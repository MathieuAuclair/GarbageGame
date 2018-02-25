function GameThread(clockSpeed){
	var actions = [];
	var clock = setInterval(function(){
		for(i=0; i<actions.length; i++){
			actions[i].func();
		}
	}, clockSpeed);
	this.suscribe = function(action){
		actions.push(action);
	},
	this.unsubscribe = function(action){
		context.clearRect(0, 0, canvas.width, canvas.height);
		for(i=0; i<actions.length; i++){
			actions[i].func();
		}
	}
}


/*TEST AREA*/

var spritesheet = document.getElementById('spritesheet');

//Create
var renderer = new Renderer();
var gameThread = new GameThread(100);

//Shapes
var rectangle = new Rectangle(100, 100, 200, 200);
var sprite = new Sprite(spritesheet, new Vector2d(50, 50), new Vector2d(50, 50), new Vector2d(100, 250));

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
