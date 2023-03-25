function Vector2d(x, y){
  this.x = x,
  this.y = y,
  this.add = function(vector2d){
    this.x += vector2d.x;
    this.y += vector2d.y;
  },
  this.substract = function(vector2d){
    this.x -= vector2d.x;
    this.y -= vector2d.y;
  },
  this.getDiff = function(vector2d){
    var result = this;
    result.substract(vector2d);
    return result;
  },
  this.getDistance = function(vector2d){
    return Math.sqrt(Math.pow((this.x - vector2d.x), 2) + Math.pow((this.y - vector2d.y), 2));
  }
}
