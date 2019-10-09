// Task 1
// fix this to show the correct numbers 0, 1, 2, 3, 4
for (var i = 0; i < 5; i++) {
  var cb = (function (a) {
    return function () {
      console.log(a);
    }
  })(i);
  setTimeout(cb, 1000);
}

var arr = [
  [1, 2, 3],
  ['a', 'b', 'c']
];

// Task 2 - fix this
// from https://www.geeksforgeeks.org/direction-point-line-segment/
const [LEFT, RIGHT, ZERO] = [-1, 1, 0];
function directionOfPoint(Ax, Ay, Bx, By, Px, Py) {
  // subtracting co-ordinates of point A from
  // B and P, to make A as origin
  Bx -= Ax;
  By -= Ay;
  Px -= Ax;
  Py -= Ay;
  // Determining cross Product
  var cp = Bx * Py - By * Px;
  if (cp > 0)          // return RIGHT if cross product is positive
    return RIGHT;
  if (cp < 0)         // return LEFT if cross product is negative
    return LEFT;
  // return ZERO if cross product is zero.
  return ZERO;
}
A = [-30, 10]; B = [29, -15];
var points = [[15, 28], [22, 11], [10, 22], [-10, 11], [-5 - 10]];
for (var i = 0; i < points.length; i++) {
  P = points[i];
  res = directionOfPoint(A[0], A[1], B[0], B[1], P[0], P[1]);
  if (res == -1) {
    console.log("point " + P + " is LEFT of " + A + B);
  } else if (res == 1) {
    console.log("point " + P + " is RIGHT of " + A + B);
  } else if (res == 0) {
    console.log("point " + P + " is ON THE LINE " + A + B);
  }
}