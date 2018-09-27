//Create / Import required
const renderer = new Renderer();
const animatorThread = new GameThread(100); //Execute game loop each 200 ms
const gameThread = new GameThread(100); //Execute game loop each 100 ms
const gameThreadMovement = new GameThread(15); //Execute game loop each 50 ms
const collisionThread = new GameThread(5);

//Event to clean canvas
const canvasCleaningTask = new DictionaryIndex('canvasCleaningTask', function () {
    renderer.clearCanvas();
});

//Subscribe master events
gameThread.subscribe(canvasCleaningTask);
