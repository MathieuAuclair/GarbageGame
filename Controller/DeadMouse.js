var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var height = canvas.height;
var width = canvas.width;
var mouseClicked = false, mouseReleased = true;

function onMouseClick(e) {
    mouseClicked = !mouseClicked;
    console.log('canvas clicked');
}

function onMouseMove(e) {
    if (mouseClicked) {
        context.beginPath();
        context.arc(e.clientX, e.clientY, 7.5, 0, Math.PI * 2, false);
        context.lineWidth = 5;
        context.strokeStyle = "#fff";
        context.stroke();
    }
}

document.addEventListener("click", onMouseClick, false);
document.addEventListener("mousemove", onMouseMove, false);
