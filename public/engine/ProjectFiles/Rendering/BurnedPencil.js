const backgroundRenderingTask = new DictionaryIndex('background', function () {
    renderer.drawSprite(background);
    renderer.drawSprite(texture_grass);
    renderer.drawSprite(foreground_detail);
    renderer.drawSprite(foreground_decoration);
    renderer.drawSprite(foreground);
    renderer.drawSprite(car);
});

gameThread.subscribe(backgroundRenderingTask);

const characterRenderingTask = new DictionaryIndex('button', function () {
    playerSprite.offSet = new Vector2d(rigidBody.offSetX, rigidBody.offSetY);
    renderer.drawSprite(playerSprite);
});

gameThread.subscribe(characterRenderingTask);
