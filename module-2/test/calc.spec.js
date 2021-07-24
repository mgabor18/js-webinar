const calc = require("../calc");
const expect = require("chai").expect;

describe.only("calc", () => {
  /*
   * calc(3).v // 3 DONE
   * calc(3).add(5).v // 8 DONE
   * calc(3).minus(2).v // 1 DONE
   * calc(4).sqrt().v // 2 DONE
   * calc(3).times(10).v // 30 DONE
   * calc(10).divide(2).v // 5 DONE
   * calc(10).modulo(5).v // 0 DONE
   * calc(5).divide(0) // throw error DONE
   * calc(-3).sqrt() // throw error DONE
   * calc(3).add(4).minus(3).times(6).v // 24 DONE
   */
  // TODO: write test cases to test calculator
  it("should exist", () => {
    return expect(calc(3)).not.to.be.undefined;
  });
  it("should return a number", () => {
    return expect(calc(3).v).to.be.a("number");
  });
  it("should have proper positive value", () => {
    return expect(calc(3).v).to.be.equal(3);
  });
  it("should have proper negative value", () => {
    return expect(calc(-18).v).to.be.equal(-18);
  });

  describe("addition", () => {
    it("should exist", () => {
      return expect(calc(3).add).not.to.be.undefined;
    });
    it("should be able to add a positive number to the current value", () => {
      return expect(calc(3).add(5).v).to.be.equal(8);
    });
    it("should be able to add a negative number to the current value", () => {
      return expect(calc(18).add(-28).v).to.be.equal(-10);
    });
    it("should be able to add a fractional number to the current value", () => {
      return expect(calc(4.2).add(1.7).v).to.be.equal(5.9);
    });
  });

  describe("substraction", () => {
    it("should exist", () => {
      return expect(calc(18).minus).not.to.be.undefined;
    });
    it("should be able to substract a positive number from the current value", () => {
      return expect(calc(3).minus(2).v).to.be.equal(1);
    });
    it("should be able to substract a negative number from the current value", () => {
      return expect(calc(3).minus(-2).v).to.be.equal(5);
    });
    it("should be able to substract a fractional number from the current value", () => {
      return expect(calc(4.2).minus(1.7).v).to.be.equal(2.5);
    });
  });

  describe("multiplication", () => {
    it("should exist", () => {
      return expect(calc(3).times).not.to.be.undefined;
    });
    it("should be able to multiply the current value with positive number", () => {
      return expect(calc(3).times(10).v).to.be.equal(30);
    });
    it("should be able to multiply the current value with negative number", () => {
      return expect(calc(10).times(-1).v).to.be.equal(-10);
    });
    it("should be able to multiply the current value with fraction", () => {
      return expect(calc(10).times(0.5).v).to.be.equal(5);
    });
  });

  describe("division", () => {
    it("should exist", () => {
      return expect(calc(3).divide).not.to.be.undefined;
    });
    it("should handle division by 0", () => {
      return expect(() => calc(5).divide(0)).to.throw("Division by 0 is not possible!");
    });
    it("should be able to divide current value by a positive number", () => {
      return expect(calc(10).divide(2).v).to.be.equal(5);
    });
    it("should be able to divide current value by a negative number", () => {
      return expect(calc(10).divide(-2).v).to.be.equal(-5);
    });
    it("should be able to divide current value by a fractional number", () => {
      return expect(calc(10).divide(2.5).v).to.be.equal(4);
    });
  });

  describe("square root", () => {
    it("should exist", () => {
      return expect(calc(18).sqrt).not.to.be.undefined;
    });
    it("should be able to return the squre root of the current value", () => {
      return expect(calc(4).sqrt().v).to.be.equal(2);
    });
    it("should throw an error if the current value is negative", () => {
      return expect(() => calc(-3).sqrt()).to.throw("Square root of negative value cannot be determined!");
    });
    it("should return the square root of the current value, in case of fractional numbers", () => {
      return expect(calc(1.21).sqrt().v).to.equal(1.1);
    });
  });

  describe("modulo", () => {
    it("should exist", () => {
      return expect(calc(3).modulo).not.to.be.undefined;
    });
    it("should handle division by 0", () => {
      return expect(() => calc(5).modulo(0)).to.throw();
    });
    it("should be able to return the remainder of current positive value", () => {
      return expect(calc(10).modulo(5).v).to.be.equal(0);
    });
    it("should be able to return the remainder of current negative value", () => {
      return expect(calc(-11).modulo(-4).v).to.be.equal(-3);
    });
  });

  describe("chained operations", () => {
    it("should be able to chain operations on current value", () => {
      return expect(calc(3).add(4).minus(3).times(6).v).to.equal(24);
    });
    it("should be able to chain operations with some negative values", () => {
      return expect(calc(-8).add(12).minus(-5).sqrt().modulo(2).v).to.equal(1);
    });
    it("should be able to chain operations with fractional numbers", () => {
      return expect(calc(1.5).add(2.5).minus(1.2).times(5).v).to.equal(14);
    });
  });

  describe("to string transformation", () => {
    it("should exist", () => {
      return expect(calc(3).toString).not.to.be.undefined;
    });
    it("should return a string", () => {
      return expect(calc(3).toString()).to.be.a("string");
    });
    it("should return the current positive value as a string", () => {
      return expect(calc(3).toString()).to.be.equal("3");
    });
    it("should return the current negative value as a string", () => {
      return expect(calc(-41).toString()).to.be.equal("-41");
    });
    it("should return the current fractional value as a string", () => {
      return expect(calc(1.4).toString()).to.be.equal("1.4");
    });
  });
});
