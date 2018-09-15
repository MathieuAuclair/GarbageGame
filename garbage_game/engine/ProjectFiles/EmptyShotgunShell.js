//Create / Import required
const renderer = new Renderer();
const animatorThread = new GameThread(100); //Execute game loop each 200 ms
const gameThread = new GameThread(100); //Execute game loop each 100 ms
const gameThreadMovement = new GameThread(15); //Execute game loop each 50 ms