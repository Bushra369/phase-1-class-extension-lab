class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, side) => acc + side, 0);
  }
}

class Triangle extends Polygon {
  

  get isValid() {
    if (this.countSides !== 3) return false;

    const [a, b, c] = this.sides;
    return a + b > c && a + c > b && b + c > a;
  }
}

class Square extends Polygon {

  get isValid() {
    if (this.countSides !== 4) return false;

    return this.sides.every(side => side === this.sides[0]);
  }

  get area() {
    if (this.isValid) {
      return this.sides[0] ** 2;
    } else {
      return "Invalid square: All sides must have equal length.";
    }
  }
}


