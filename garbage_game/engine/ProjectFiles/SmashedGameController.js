//setControlKey
plugActionToInput(37, function (keyState) {
    movement(function () {
        playerSprite.clipping.y = 300;
        playerSprite.offSet.x -= MOVEMENT_SCALE_VALUE;
    }, keyState);
});

plugActionToInput(38, function (keyState) {
    movement(function () {
        playerSprite.clipping.y = 200;
        playerSprite.offSet.y -= MOVEMENT_SCALE_VALUE;
    }, keyState);
});

plugActionToInput(39, function (keyState) {
    movement(function () {
        playerSprite.clipping.y = 100;
        playerSprite.offSet.x += MOVEMENT_SCALE_VALUE;
    }, keyState);
});

plugActionToInput(40, function (keyState) {
    movement(function () {
        playerSprite.clipping.y = 0;
        playerSprite.offSet.y += MOVEMENT_SCALE_VALUE;
    }, keyState);
});

function movement(action, keyState) {
    if (keyState && !gameThreadMovement.hasEvent("movement")) {
        animatorThread.subscribe(animator);
        gameThreadMovement.subscribe(
            new DictionaryIndex("movement", action)
        );
    } else {
        animatorThread.unsubscribe("animator");
        gameThreadMovement.unsubscribe("movement");
    }
}
