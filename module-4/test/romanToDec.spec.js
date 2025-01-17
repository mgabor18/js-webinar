const romanToDec = require("../romanToDec");
const expect = require("chai").expect;
const testData = require("./romanToDec.json");
const negativeTestData = require("./romanToDecNegative.json");

describe("Module 4 - romanToDec", () => {
  it("should be a function", () => {
    expect(romanToDec).to.be.instanceOf(Function);
  });

  testData.forEach((data) => {
    it(
      "should return proper value for " + JSON.stringify(data.arguments),
      () => {
        expect(romanToDec.apply(null, data.arguments)).to.equal(data.result);
      }
    );
  });

  negativeTestData.forEach((data) => {
    it("should throw exception " + JSON.stringify(data.arguments), () => {
      expect(() => romanToDec.apply(null, data.arguments)).to.throw(Error);
    });
  });
});
