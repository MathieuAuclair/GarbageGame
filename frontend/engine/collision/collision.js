/**
 * Check weather a collider and its target have entered in a collision.
 * @param {Rectangle | Circle} collider boundry object that represent the game object collisions
 * @param {Rectangle[]} impactColliders all boundry objects that can interact with the game object in question
 * @param {function} action callback that will be executed upon collision
 */
function checkRigidBodyCollision(collider, impactColliders, action) {
  if (collider.radius === undefined) {
    // is rectangle collider?
    processRectangleCollider(collider, impactColliders, action);
    return;
  }

  if (checkCircleCollisions(collider, impactColliders)) {
    action();
  }
}

/**
 * Will first check if hypothenuse is within range before running rectangle validation to save compute power
 * @param {Rectangle} collider rectangle collider of a gameobject
 * @param {function} action callback that will be executed upon collision
 */
function processRectangleCollider(collider, impactColliders, action) {
  const circleCollider = getCircleColliderFromRectangle(collider);

  if (!checkCircleCollisions(circleCollider, impactColliders)) {
    // Not in hypothenuse range, no need to check rectangle
    return;
  }

  if (checkRectangleCollision(collider, impactColliders)) {
    action();
  }
}

function getCircleColliderFromRectangle(rectangle) {
  const radiusBox = Math.sqrt(
    Math.pow(rectangle.width / 2, 2) + Math.pow(rectangle.height / 2, 2)
  ); 

  return new Circle(
    radiusBox,
    rectangle.offSetX,
    rectangle.offSetY
  );
}

/**
 * @return {boolean}
 */
function checkCircleCollisions(circle, colliders) {
  for (let i = 0; i < colliders.length; i++) {
    const dx = circle.offSetX - colliders[i].offSetX;
    const dy = circle.offSetY - colliders[i].offSetY;
    const distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    
    let targetColliderRadius = colliders[i].radius;

    if(!targetColliderRadius){ // is circle collider?
      targetColliderRadius = getCircleColliderFromRectangle(colliders[i]).radius;
    }

    if (distance < circle.radius + targetColliderRadius) {
      console.log("CIRCLE DETECT");
      return true;
    }
  }

  return false;
}

/**
 * @return {boolean}
 */
function checkRectangleCollision(rectangle, colliders) {
  for (let i = 0; i < colliders.length; i++) {
    if (
      rectangle.offSetX < colliders[i].offSetX + colliders[i].width &&
      rectangle.offSetX + rectangle.width > colliders[i].offSetX &&
      rectangle.offSetY < colliders[i].offSetY + colliders[i].height &&
      rectangle.height + rectangle.offSetY > colliders[i].offSetY
    ) {
      console.log("RECT DETECT");
      return true;
    }
  }
  return false;
}
