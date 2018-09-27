// create a rigid body
let rigidBody = new Rectangle(70, 70, 150, canvas.height - 100);

// set controls
SetArrowKeyInputMovement(rigidBody, animator);

// create collision task
const collision = new DictionaryIndex("collision", function () {
    stringLastMovement = "...";
    checkDynamicBodyCollision(rigidBody, function () {
        stringLastMovement = "HIT";
    });
});

// subscribe collision task
collisionThread.subscribe(collision);