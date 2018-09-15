var expect = chai.expect;

describe("GameThread", function () {
    describe("Subscription", function () {
        it("Should register an event function", function () {
            var expected = true;
            var isRunning = false;

            var thread = new GameThread(100);
            thread.subscribe(
                new DictionaryIndex("test", function () {
                    isRunning = true;
                })
            );

            setTimeout(function() {
                expect(isRunning).to.equal(expected);
                thread.unsubscribe("test");
            }, 101);
        });

        it("Should unregister and event with the name", function(){
            var expected = false;
            var isRunning = true;

            var thread = new GameThread(100);
            thread.subscribe(
                new DictionaryIndex("test", function () {
                    isRunning = true;
                })
            );

            thread.unsubscribe("test");
            isRunning = false;

            setTimeout(function() {
                expect(isRunning).to.equal(expected);
            }, 101);
        });
    });
});