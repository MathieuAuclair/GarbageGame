
function CircleCollider2d(circle){
    var circle1 = {radius: 20, x: 5, y: 5};
    var circle2 = {radius: 12, x: 10, y: 5};

    var dx = circle1.x - circle2.x;
    var dy = circle1.y - circle2.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < circle1.radius + circle2.radius) {
        // collision détectée !
    }
}

function ShapeCollider2d(shape){
    /*TODO implement*/
}

function RectangleCollider2d(rectangle){
    var rect1 = {x: 5, y: 5, width: 50, height: 50}
    var rect2 = {x: 20, y: 10, width: 10, height: 10}

    if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
        // collision détectée !
    }

// remplissage des valeurs =>

    if (5 < 30 &&
        55 > 20 &&
        5 < 20 &&
        55 > 10) {
        // collision détectée !
    }
}

function quadTree(){
    const bounds = {
        x: 0,
        y: 0,
        width: canvas.width,
        height: canvas.height
    };

    const quad = new QuadTree(bounds);

//insert a random point
    quad.insert({
        x:12,
        y:25,
        height:10,
        width:25
    });

    const items = quad.retrieve({x: 11, y: 20, height: 10, width: 20});
}

