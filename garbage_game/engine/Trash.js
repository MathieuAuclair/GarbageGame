let stringLastMovement = "No stats to show";

let circleColliderCollection = new Collection();

let radiusCar = Math.sqrt(Math.pow(car.stretch.x / 2, 2) + Math.pow(car.stretch.y / 2, 2));
let radiusPlayer = Math.sqrt(Math.pow(playerSprite.stretch.x / 2, 2) + Math.pow(playerSprite.stretch.y / 2, 2));

//static collision box
circleColliderCollection.add(
    new DictionaryIndex(
        "car",
        new Circle(radiusCar, car.stretch.x / 2 + car.offSet.x, car.stretch.y / 2 + car.offSet.y),
    )
);

const textRenderingTask = new DictionaryIndex('logger', function () {
    renderer.drawUiText(new Vector2d(25, (canvas.height - 10)), stringLastMovement, 'white', '20px impact');
    renderer.drawUiText(new Vector2d(25, 60), 'This is trash !', 'white', '50px impact');
    renderer.drawUiText(new Vector2d(25, 120), 'A garbage game engine !', 'white', '50px impact');
});

const backgroundRenderingTask = new DictionaryIndex('background', function () {
    renderer.drawSprite(background);
    renderer.drawSprite(texture_grass);
    renderer.drawSprite(foreground_detail);
    renderer.drawSprite(foreground_decoration);
    renderer.drawSprite(foreground);
    renderer.drawSprite(car);

    renderer.drawCircleStroke(
        new Circle(radiusCar, car.stretch.x / 2 + car.offSet.x, car.stretch.y / 2 + car.offSet.y),
        "#FFFF00"
    );

    renderer.drawRectangleStroke(
        new Rectangle(car.stretch.x, car.stretch.y, car.offSet.x, car.offSet.y),
        "#FF8800"
    )
});

const animator = new DictionaryIndex("animator", function () {
    playerSprite.clipping.x += SPRITE_CLIPPING_SIZE.x;

    if (playerSprite.clipping.x / SPRITE_CLIPPING_SIZE.x > 5) {
        playerSprite.clipping.x = 0;
    }
});

const characterRenderingTask = new DictionaryIndex('button', function () {
    renderer.drawSprite(playerSprite);

    renderer.drawRectangleStroke(
        new Rectangle(playerSprite.stretch.x, playerSprite.stretch.y, playerSprite.offSet.x, playerSprite.offSet.y),
        "#FF0000"
    );

    renderer.drawCircleStroke(
        new Circle(radiusPlayer, playerSprite.stretch.x / 2 + playerSprite.offSet.x, playerSprite.stretch.y / 2 + playerSprite.offSet.y),
        "#00FF00"
    );

    stringLastMovement = checkCircleCollisions(
        new Circle(
            radiusPlayer,
            playerSprite.stretch.x / 2 + playerSprite.offSet.x,
            playerSprite.stretch.y / 2 + playerSprite.offSet.y
        ),
        circleColliderCollection
    ).toString();
});

//Subscribe events
gameThread.subscribe(canvasCleaningTask);
gameThread.subscribe(backgroundRenderingTask);
gameThread.subscribe(textRenderingTask);
gameThread.subscribe(characterRenderingTask);