function Renderer() {
    function drawUi(color, font) {
        context.font = (font == 'undefined') ? "30px Arial" : font;
        context.fillStyle = color;
    }

    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");

    this.drawRectangle = function (rectangle, color) {
        context.fillStyle = color;
        context.fillRect(rectangle.offSetX, rectangle.offSetY, rectangle.width, rectangle.height);
    },
        this.drawRectangleStroke = function (rectangle, color) {
            context.strokeStyle = color;
            context.strokeRect(rectangle.offSetX, rectangle.offSetY, rectangle.width, rectangle.height);
        },
        this.drawGradient = function (rectangle, colorStart, colorEnd) {
            var gradient = context.createLinearGradient(0, 0, 200, 0);

            gradient.addColorStop(0, colorStart);
            gradient.addColorStop(1, colorEnd);

            context.fillStyle = gradient;
            context.fillRect(rectangle.offSetX, rectangle.offSetY, rectangle.width, rectangle.height);
        },
        this.drawCircle = function (circle, color) {
            context.beginPath();
            context.arc(circle.offSetX, circle.offSetY, circle.radius, 0, 2 * Math.PI);
            context.fillStyle = color;
            context.fill();
        },
        this.drawCircleStroke = function (circle, color) {
            context.beginPath();
            context.arc(circle.offSetX, circle.offSetY, circle.radius, 0, 2 * Math.PI);
            context.strokeStyle = color;
            context.stroke();
        },
        this.drawRadial = function (rectangle, colorMiddle, colorEnd) {
            var gradient = context.createRadialGradient(75, 50, 5, 90, 60, 100);
            gradient.addColorStop(0, colorMiddle);
            gradient.addColorStop(1, colorEnd);

            context.fillStyle = gradient;
            context.fillRect(rectangle.offSetX, rectangle.offSetY, rectangle.width, rectangle.height);
        },
        this.drawSprite = function (sprite) {
            context.drawImage(sprite.image,
                sprite.clipping.x,
                sprite.clipping.y,
                sprite.size.x,
                sprite.size.y,
                sprite.offSet.x,
                sprite.offSet.y,
                sprite.stretch.x,
                sprite.stretch.y
            );
        },
        this.drawImage = function (img, offSet) {
            context.drawImage(img, offSet.x, offSet.y);
        },
        this.drawUiText = function (offSet, text, color, font) {
            drawUi(color, font);
            context.fillText(text, offSet.x, offSet.y);
        },
        this.drawStrokeUiText = function (offSet, text, color, font) {
            drawUi(color, font);
            context.strokeStyle = color;
            context.strokeText(text, offSet.x, offSet.y);
        },
        this.clearCanvas = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
}
