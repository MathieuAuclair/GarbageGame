stringLastMovement = "No stats to show";

const textRenderingTask = new DictionaryIndex('logger', function () {
    renderer.drawUiText(new Vector2d(25, (canvas.height - 10)), stringLastMovement, 'white', '20px impact');
    renderer.drawUiText(new Vector2d(25, 60), 'A garbage game for', 'white', '50px impact');
    renderer.drawUiText(new Vector2d(25, 120), 'a garbage soldier', 'white', '50px impact');
});

const animator = new DictionaryIndex("animator", function () {
    playerSprite.clipping.x += SPRITE_CLIPPING_SIZE.x;

    if (playerSprite.clipping.x / SPRITE_CLIPPING_SIZE.x > 5) {
        playerSprite.clipping.x = 0;
    }
});

/*Get radius for check circle*/
let radius = Math.sqrt(Math.pow(playerSprite.stretch.x / 2, 2) + Math.pow(playerSprite.stretch.y / 2, 2));
stringLastMovement = radius;

const characterRenderingTask = new DictionaryIndex('button', function () {
    renderer.drawSprite(playerSprite);

    renderer.drawRectangleStroke(
        new Rectangle(playerSprite.stretch.x, playerSprite.stretch.y, playerSprite.offSet.x, playerSprite.offSet.y),
        "#FF0000"
    );

    renderer.drawCircleStroke(
        new Circle(radius, playerSprite.stretch.x / 2 + playerSprite.offSet.x, playerSprite.stretch.y / 2 + playerSprite.offSet.y),
        "#00FF00"
    );
});

//Subscribe events
gameThread.subscribe(canvasCleaningTask);
gameThread.subscribe(backgroundRenderingTask);
gameThread.subscribe(textRenderingTask);
gameThread.subscribe(characterRenderingTask);