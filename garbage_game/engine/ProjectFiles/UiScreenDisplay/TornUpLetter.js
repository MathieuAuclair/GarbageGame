let stringLastMovement = "No stats to show";

const textRenderingTask = new DictionaryIndex('ui', function () {
    renderer.drawUiText(new Vector2d(25, (canvas.height - 10)), stringLastMovement, 'white', '20px impact');
    renderer.drawUiText(new Vector2d(25, 60), 'This is trash !', 'white', '50px impact');
    renderer.drawUiText(new Vector2d(25, 120), 'A garbage game engine !', 'white', '50px impact');
});

gameThread.subscribe(textRenderingTask);