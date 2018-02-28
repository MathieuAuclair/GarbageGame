var expect = chai.expect;

describe("Vector2d", function () {
    describe("Calculation", function () {
        it("should return the distance between 2 vector", function () {
            var expected = 4;
            var a = new Vector2d(0, 1);
            var b = new Vector2d(0, 5);
            var distance = a.getDistance(b);
            expect(distance).to.equal(expected);
        });

        it("should return a vector equal to the difference", function () {
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

        it("should set the difference value of two vector", function () {
            var vector = new Vector2d(5, 5);
            vector.substract(new Vector2d(5, 5));
            expect(vector.x).to.equal(0);
            expect(vector.y).to.equal(0);
        });
    });

    describe("Parameters", function () {
        it("should throw if constructor parameter isNaN", function () {
            expect(function () {
                (new Vector2d("foo", "bar")).greets();
            }).to.throw(Error);
        });
    });
});