const SPRITE_CLIPPING_SIZE = new Vector2d(100, 100);
const MOVEMENT_SCALE_VALUE = 3;
//Event to clean canvas
const canvasCleaningTask = new DictionaryIndex('canvasCleaningTask', function () {
    renderer.clearCanvas();
});