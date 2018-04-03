var inputs = { //An array of actions is associated with the key ASCII code
  37:[], //left
  38:[], //top
  39:[], //right
  40:[] //bottom
};

document.onkeydown = function(e){ keyEventHandler(e, true); }

document.onkeyup = function(e){ keyEventHandler(e, false); }

function keyEventHandler(e, keyState) {
  for(var input in inputs)
  {
    if(input == e.keyCode)
    {
      for(var i = 0; i < inputs[e.keyCode].length; i++)
        inputs[e.keyCode][i](keyState);
    }
  }
}

function plugActionToInput(keyCode, action) {
  inputs[keyCode].push(action);
}

function unplugActionToInput(keyCode, action) {
  inputs[keyCode].splice(inputs[keyCode].indexOf(action), 1);
}

var integer = 0;

var action1 = function (keyState) {
  if(keyState)
  {
    integer++;
    console.log(integer);
  }
}

var action2 = function (keyState) {
  if(keyState)
  {
    unplugActionToInput(37, action1);
  }
}

plugActionToInput(37, action1);
plugActionToInput(40, action2);
