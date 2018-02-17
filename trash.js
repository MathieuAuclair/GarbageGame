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

var renderer = new Renderer();
var rectangle = new Rectangle(100, 100, 200, 200);

var test = new DictionaryIndex('logger', function(){
	renderer.drawStrokeUiText(new Vector2d(100, 100), 'this is a working renderer', '#FF0000', '50px verdana');
});

var gameThread = new GameThread(100);
gameThread.suscribe(test);
