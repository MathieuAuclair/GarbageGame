function GameThread(clockSpeed) {
    var actions = [];
    setInterval(function () {
        for (i = 0; i < actions.length; i++) {
            actions[i].func();
        }
    }, clockSpeed);

    this.suscribe = function (action) {
        actions.push(action);
    };
    this.unsubscribe = function (action) {
        for (i = 0; i < actions.length; i++) {
            if (actions[i].name === action) {
                actions.splice(i, 1);
            }
        }
    }
}