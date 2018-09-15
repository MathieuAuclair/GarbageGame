const animator = new DictionaryIndex("animator", function (direction) {
    playerSprite.clipping.x += SPRITE_CLIPPING_SIZE.x;

    if (playerSprite.clipping.x / SPRITE_CLIPPING_SIZE.x > 5) {
        playerSprite.clipping.x = 0;
    }

    if (direction !== undefined || direction != null) {
        playerSprite.clipping.y = direction;
    }
});