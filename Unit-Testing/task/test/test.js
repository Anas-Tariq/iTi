const index = require("../index");
const assert = require("assert");
// const exp = require("constants");
const assertChai = require("chai").assert;
const expect = require("chai").expect;
const should = require("chai").should();

var increaser = 1;

describe("Test Capitlization function", () => {
    //test that the function takes a string  it will return a string
    it("if the input is string the out is a string", () => {
        assertChai.equal(index.capitalizeText(String()), String());
    });
    //test that the function takes a string and return it after capitalize it
    it("Capitalize the input", () => {
        assertChai.equal(index.capitalizeText("iti"), "ITI");
    });
    //test if the function takes number it will throw type error says parameter should be string
    it("Throw error if the input was a number", () => {
        expect(function () {
            index.capitalizeText(12);
        }).to.throw(TypeError, "parameter should be string");
    });
    //test if the input iti , the returned value  will not equal to hello
    it("The input is different from the output", () => {
        setTimeout(() => {
            expect(index.capitalizeText("iti")).to.not.equal("HELLO");
        }, 5000);
    });
});

describe("Test Create Array Function", () => {
    it.skip("The output is an array", () => {
        index.createArray(21).should.be.an("array");
    });
    it("The input is the array length", () => {
        expect(index.createArray(3)).to.be.lengthOf(3).that.includes(1);
    });
    beforeEach(function () {
        console.log(increaser++);
    });
});
