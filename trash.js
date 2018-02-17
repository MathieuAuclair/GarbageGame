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
		for(i=0; i<actions.length; i++){
			actions[i].func();
		}
	}
}

var test = new DictionaryIndex('logger', function(){
	console.log('Clock');
});

var gameThread = new GameThread(100);
gameThread.suscribe(test);
