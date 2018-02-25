var expect = chai.expect;

describe("Vector2d", function () {
    describe("Calculation", function () {
        it("should return/set a vector equal to the difference", function () {
            var vector = new Vector2d(1, 1).getDiff(new Vector2d(1, 1));
            expect(vector.x).to.equal(0);
            expect(vector.y).to.equal(0);
        });

        it("should set the total value of two vector", function () {
            var vector = new Vector2d(0, 0);
            vector.add(new Vector2d(1, 1));
            expect(vector.x).to.equal(1);
            expect(vector.y).to.equal(1);
        });
    });

    describe("Parameters", function () {
        it("should throw if no parameter isNaN", function () {
            expect(function () {
                (new Vector2d("foo", "bar")).greets();
            }).to.throw(Error);
        });
    });
});