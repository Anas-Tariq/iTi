var counter = {
    currentValues: function () {
        return 1;
    },
};
function sumOfValues() {
    return counter.currentValues();
}

describe("mock and spy", function () {
    // and expect that we called the spy function for one time
    it("spying", function () {
        spyOn(counter, "currentValues");
        counter.currentValues();
        expect(counter.currentValues).toHaveBeenCalled();
    });

    var mern;
    beforeEach(function () {
        mern = jasmine.createSpyObj("mearn", ["javascript", "react", "node", "express"]);
        mern.javascript();
        mern.react();
        mern.node(1);
        mern.express();
    });
    it("Test new Spy Mock", function () {
        expect(mern.javascript).toHaveBeenCalled();
        expect(mern.react).toBeDefined();
        expect(mern.node).toHaveBeenCalledOnceWith(jasmine.anything());
    });
});
