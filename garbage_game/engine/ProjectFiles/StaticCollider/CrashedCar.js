let circleColliderCollection = new Collection();
let rectangleColliderCollection = new Collection();

let carBox = new Rectangle(car.stretch.x, car.stretch.y, car.offSet.x, car.offSet.y)
rectangleColliderCollection.add(
    new DictionaryIndex(
        "car",
        carBox
    )
);
let radiusCar = Math.sqrt(Math.pow(car.stretch.x / 2, 2) + Math.pow(car.stretch.y / 2, 2));
circleColliderCollection.add(
    new DictionaryIndex(
        "car",
        new Circle(radiusCar, car.stretch.x / 2 + car.offSet.x, car.stretch.y / 2 + car.offSet.y),
    )
);

/**/

let topBound = new Rectangle(canvas.width, canvas.height * 0.6, 0, 0);
rectangleColliderCollection.add(
    new DictionaryIndex(
        "top_bound",
        topBound
    )
);
let radiusTopBound = Math.sqrt(Math.pow(topBound.width / 2, 2) + Math.pow(topBound.height * 0.5 / 2, 2));
circleColliderCollection.add(
    new DictionaryIndex(
        "top_bound",
        new Circle(radiusTopBound, topBound.width / 2, topBound.height / 2),
    )
);

/**/

let bottomBound = new Rectangle(canvas.width, 10, 0, canvas.height - 10);
rectangleColliderCollection.add(
    new DictionaryIndex(
        "top_bound",
        bottomBound
    )
);
let radiusBottomBound = Math.sqrt(Math.pow(bottomBound.width / 2, 2) + Math.pow(bottomBound.height * 0.5 / 2, 2));
circleColliderCollection.add(
    new DictionaryIndex(
        "top_bound",
        new Circle(radiusBottomBound, bottomBound.width / 2, bottomBound.height / 2),
    )
);

/**/

let rightBound = new Rectangle(10, canvas.height, canvas.width - 10, 0);
rectangleColliderCollection.add(
    new DictionaryIndex(
        "top_bound",
        rightBound
    )
);
let radiusRightBound = Math.sqrt(Math.pow(rightBound.width / 2, 2) + Math.pow(rightBound.height * 0.5 / 2, 2));
circleColliderCollection.add(
    new DictionaryIndex(
        "top_bound",
        new Circle(radiusRightBound, rightBound.width / 2, rightBound.height / 2),
    )
);

/**/

let leftBound = new Rectangle(10, canvas.height, 0, 0);
rectangleColliderCollection.add(
    new DictionaryIndex(
        "top_bound",
        leftBound
    )
);
let radiusLeftBound = Math.sqrt(Math.pow(leftBound.width / 2, 2) + Math.pow(leftBound.height / 2, 2));
circleColliderCollection.add(
    new DictionaryIndex(
        "top_bound",
        new Circle(radiusLeftBound, leftBound.width / 2, leftBound.height / 2),
    )
);

/* DEBUG BORDER */

/*
gameThread.subscribe(
    new DictionaryIndex("debug", function () {
        renderer.drawRectangle(leftBound, "green");
        renderer.drawRectangle(rightBound, "green");
        renderer.drawRectangle(bottomBound, "green");
        renderer.drawRectangle(topBound, "green");
        renderer.drawRectangleStroke(
            new Rectangle(
                playerSprite.stretch.x,
                playerSprite.stretch.y,
                playerSprite.offSet.x,
                playerSprite.offSet.y
            ),
            "#00BEEF"
        )
    })
);
*/