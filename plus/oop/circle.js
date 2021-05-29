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
    this.r = r;
  }
  area() {
    return Math.PI * this.r ** 2;
  }
  perimeter() {
    return 2 * this.r * Math.PI;
  }
}
