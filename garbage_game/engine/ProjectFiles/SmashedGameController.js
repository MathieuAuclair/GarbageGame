function SetArrowKeyInputMovement(/*Rectangle*/body, /*DictionaryIndex*/animator) {
    //setControlKey
    plugActionToInput(37, function (keyState) {
        movement(function () {
            animator.func(SPRITE_CLIPPING_DIRECTION.left);
            body.offSetX -= MOVEMENT_SCALE_VALUE;
        }, keyState);
    });

    plugActionToInput(38, function (keyState) {
        movement(function () {
            animator.func(SPRITE_CLIPPING_DIRECTION.up);
            body.offSetY -= MOVEMENT_SCALE_VALUE;
        }, keyState);
    });

    plugActionToInput(39, function (keyState) {
        movement(function () {
            animator.func(SPRITE_CLIPPING_DIRECTION.right);
            body.offSetX += MOVEMENT_SCALE_VALUE;
        }, keyState);
    });

    plugActionToInput(40, function (keyState) {
        movement(function () {
            animator.func(SPRITE_CLIPPING_DIRECTION.down);
            body.offSetY += MOVEMENT_SCALE_VALUE;
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
}