const sprite_sheet = document.getElementById('spritesheet');

// Physics
let rigidBody = new Rectangle(70, 70, 150, canvas.height - 100);

const collision = new DictionaryIndex("collision", function () {
  stringLastMovement = "...";
  checkRigidBodyCollision(rigidBody, [carBox], function () {
    stringLastMovement = "HIT";
  });
});

collisionThread.subscribe(collision);

// Renderer
const playerSprite = new Sprite(
    sprite_sheet, //image
    new Vector2d(0, 100), //clipping
    new Vector2d(100, 100), //size
    new Vector2d(100, canvas.height - 150), //offset
    new Vector2d(70, 70), //stretch
);

const characterRenderingTask = new DictionaryIndex("button", function () {
  playerSprite.offSet = new Vector2d(rigidBody.offSetX, rigidBody.offSetY);
  renderer.drawSprite(playerSprite);
});

gameThread.subscribe(characterRenderingTask);

// Animator
const animator = new DictionaryIndex("animator", function (direction) {
  playerSprite.clipping.x += SPRITE_CLIPPING_SIZE.x;

  if (playerSprite.clipping.x / SPRITE_CLIPPING_SIZE.x > 5) {
    playerSprite.clipping.x = 0;
  }

  if (direction !== undefined || direction != null) {
    playerSprite.clipping.y = direction;
  }
});


// Controls
SetArrowKeyInputMovement(rigidBody, animator);
