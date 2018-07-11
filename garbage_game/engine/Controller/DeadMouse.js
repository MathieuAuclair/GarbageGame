var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var height = canvas.height;
var width = canvas.width;

var clickBoxes = [];

function onMouseClick(e) {
    var clickArea = canvas.getBoundingClientRect();
    var clickPosition = new Vector2d((e.clientX - clickArea.left), (e.clientY - clickArea.top));

    for (var i = 0; i < clickBoxes.length; i++) {
        if (
            clickPosition.x < (parseInt(clickBoxes[i].clickBox.width) + parseFloat(clickBoxes[i].clickBox.offSetX)) &&
            clickPosition.x > parseInt(clickBoxes[i].clickBox.offSetX) &&
            clickPosition.y < (parseInt(clickBoxes[i].clickBox.height) + parseInt(clickBoxes[i].clickBox.offSetY)) &&
            clickPosition.y > parseInt(clickBoxes[i].clickBox.offSetY)) {

            clickBoxes[i].index.func();
        }
    }
}

function ClickManager() {
    this.suscribeClickBox = function (name, clickBox, func) {
        clickBoxes.push({ index: new DictionaryIndex(name, func), clickBox: clickBox })
    };
    this.unsubscribeClickBox = function (name) {
        for (var i = 0; i < clickBoxes.length; i++) {
            if (clickBoxes[i].index.name === name) {
                clickBoxes.splice(i, 1);
                break;
            }
        }
    }
}

canvas.addEventListener("click", onMouseClick, false);
