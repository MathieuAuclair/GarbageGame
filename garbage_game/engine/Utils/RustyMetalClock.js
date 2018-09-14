function GameThread(clockSpeed) {
    var actions = [];
    setInterval(function () {
        for (var i = 0; i < actions.length; i++) {
            actions[i].func();
        }
    }, clockSpeed);

    this.hasEvent = function (action) {
        for (var i = 0; i < actions.length; i++) {
            if(action === actions[i].name){
                return true;
            }   
        }
        return false;
    }
    this.suscribe = function (action) {
        actions.push(action);
    };
    this.unsubscribe = function (action) {
        for (var i = 0; i < actions.length; i++) {
            if (actions[i].name === action) {
                actions.splice(i, 1);
            }
        }
    }
}