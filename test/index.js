const expect = require("chai").expect;
const required = require("../dist/index").required;
const validPostalCode = require("../dist/index").validPostalCode;
console.log(required, validPostalCode);

describe("required function test", () => {
    it("should return true when left blank", () => {
        const input = "";
        expect(required(input)).to.equal(true);
    });

    it("should be false when there is input", () => {
        const input = "anyString";
        expect(required(input)).to.equal(false);
    });
});

describe("validPostalCode test", () => {
    it("should return false when there isn't a valid postal code", () => {
        const input = "90210";
        expect(validPostalCode(input)).to.equal(false);
    });
    
    it("should return true when valid postal code is input", () => {
        const input = "V1J 4K1";
        expect(validPostalCode(input)).to.equal(true);
    })
})