/**
 * @return {boolean}
 */
function checkCircleCollisions(/*Circle*/circle, /*Collection*/circleCollection) {
    let circles = circleCollection.getAll();
    for (let i = 0; i < circles.length; i++) {
        let dx = circle.offSetX - circles[i].offSetX;
        let dy = circle.offSetY - circles[i].offSetY;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < circle.radius + circles[i].radius)
            return true;
    }
    return false;
}

/**
 * @return {boolean}
 */
function checkRectangleCollision(/*Rectangle*/rectangle, /*Collection*/rectangleCollection) {
    let rectangles = rectangleCollection.getAll();
    for (let i = 0; i < rectangles.length; i++) {
        if (rectangle.offSetX < rectangles[i].offSetX + rectangles[i].width &&
            rectangle.offSetX + rectangle.width > rectangles[i].offSetX &&
            rectangle.offSetY < rectangles[i].offSetY + rectangles[i].height &&
            rectangle.height + rectangle.offSetY > rectangles[i].offSetY) {
            return true;
        }
    }
    return false;
}

function checkDynamicBodyCollision(/*Rectangle*/rectangle, /*function*/action) {
    let radiusBox = Math.sqrt(Math.pow(rectangle.width / 2, 2) + Math.pow(rectangle.height / 2, 2));
    let circleCollider = new Circle(
        radiusBox,
        rectangle.width / 2 + rectangle.offSetX,
        rectangle.height / 2 + rectangle.offSetY
    );

    if (checkCircleCollisions(circleCollider, circleColliderCollection)) {
        let rectangleCollider = new Rectangle(
            rectangle.width,
            rectangle.height,
            rectangle.offSetX,
            rectangle.offSetY
        );

        if (checkRectangleCollision(rectangleCollider, rectangleColliderCollection)) {
            action();
        }
    }
}

/**
 * @return {boolean}
 */
function checkShapeCollision(/*Shape*/shape, /*Collection*/shapeCollection) {
    /*TODO implement*/
}

function quadTree() {
    /*TODO implement*/
 /*   const bounds = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    };
    const quad = new QuadTree(bounds);
//insert a random point
    quad.insert({
        x: 12,
        y: 25,
        height: 10,
        width: 25
    });
    const items = quad.retrieve({x: 11, y: 20, height: 10, width: 20});*/
}

