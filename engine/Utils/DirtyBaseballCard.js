function Collection() {
    let all = [];

    this.getAll = function () {
        let allElement = [];
        for (let i = 0; i < all.length; i++) {
            allElement.push(all[i].func);
        }
        return allElement;
    }, this.remove = function (name) {
        for (let i = 0; i < all.length; i++) {
            if (all[i].name === name) {
                all.splice(i, 1);
            }
        }
    }, this.hasElement = function () {
        for (let i = 0; i < all.length; i++) {
            if (all[i].name === name) {
                return true;
            }
        }
        return false;
    }, this.add = function (element) {
        all.push(element);
    }
}