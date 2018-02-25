var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var height = canvas.height;
var width = canvas.width;

function onMouseClick(e) {
  var clickArea = canvas.getBoundingClientRect();
  console.log((e.clientX - clickArea.left) + " " + (e.clientY - clickArea.top));
}

function ClickManager(name, clickBox){
  var clickBoxes = [];
  this.suscribeClickBox = function(){
     clickBoxes.push(new DictionaryIndex(name, clickBox))
  },
  this.unsubscribeClickBox = function(name){
     for(i=0; i<clickBoxes.length; i++){
       if(clickBoxes[i].name == name){
         clickBoxes.splice(i,1);
       }
     }
  }
}

canvas.addEventListener("click", onMouseClick, false);
