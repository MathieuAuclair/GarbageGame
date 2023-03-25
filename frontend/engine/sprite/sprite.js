/**
 * Sprite image settings
 * @param {*} image HTML DOM element containing the image
 * @param {Vector2d} clipping portion of the image to include in the sprite
 * @param {Vector2d} size sprite size of the clipping
 * @param {Vector2d} offSet where the image will be rendered from the origin of the canvas
 * @param {Vector2d} stretch 
 */
function Sprite(image, clipping, size, offSet, stretch){
  this.image = image,
  this.clipping = clipping,
  this.size = size,
  this.offSet = offSet,
  this.stretch = (stretch == undefined) ? size : stretch
}
