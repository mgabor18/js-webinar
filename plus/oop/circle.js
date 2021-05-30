/**
 * Create the Circle class.
 *
 * @typedef {object} Circle
 * @property {number} r the radius of the circle
 * @function area return the area of the circle
 * @function perimeter return the perimeter of the circle
 */

class Circle {
  constructor(r) {
    if (r < 0) {
      throw new Error("Radius can not be smaller than 0.");
    }
    this.r = r;
  }
  getArea() {
    return Math.PI * this.r ** 2;
  }
  getPerimeter() {
    return 2 * this.r * Math.PI;
  }
}
