function Sprite(image, clipping, size, offSet, stretch){
  this.image = image,
  this.clipping = clipping,
  this.size = size,
  this.offSet = offSet,
  this.stretch = (stretch == undefined) ? size : stretch
}
