const sprite_sheet_car = document.getElementById("car");

// Rendering

const car = new Sprite(
  sprite_sheet_car,
  new Vector2d(0, 0), //clipping
  new Vector2d(800, 800), //size
  new Vector2d(canvas.width - 450, canvas.height * 0.7), //offset
  new Vector2d(200, 200) //stretch
);

const carRenderingTask = new DictionaryIndex("car", function () {
  renderer.drawSprite(car);
});

gameThread.subscribe(carRenderingTask);

// Collisions
const carBox = new Rectangle(car.stretch.x, 85, car.offSet.x, car.offSet.y + 55);
