function Renderer(){
  function drawUi(color, font){
    context.font = (font == 'undefined')?"30px Arial":font;
    context.fillStyle = color;
  }
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");
  this.drawRectangle = function(rectangle, color){
    context.fillStyle = color;
    context.fillRect(rectangle.offSetX, rectangle.offSetY, rectangle.width, rectangle.height);
  },
  this.drawGradient = function(rectangle, colorStart, colorEnd){
    var gradient = context.createLinearGradient(0,0,200,0);

    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);

    context.fillStyle = gradient;
    context.fillRect(rectangle.offSetX, rectangle.offSetY, rectangle.width, rectangle.height);
  },
  this.drawRadial = function(rectangle, colorMiddle, colorEnd){
    var gradient = context.createRadialGradient(75,50,5,90,60,100);
    gradient.addColorStop(0, colorMiddle);
    gradient.addColorStop(1, colorEnd);

    context.fillStyle = gradient;
    context.fillRect(rectangle.offSetX, rectangle.offSetY, rectangle.width, rectangle.height);
  },
  this.drawImage = function(){

  },
  this.drawUiText = function(offSet, text, color, font){
    drawUi(color, font);
    context.fillText(text, offSet.x, offSet.y);
  },
  this.drawStrokeUiText = function(offSet, text, color, font){
    drawUi(color, font);
    context.strokeStyle = color;
    context.strokeText(text, offSet.x, offSet.y);
  }
}
