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
var LEFT = 0;
var RIGHT = 1;
var ZERO = 2;
var TEXT = ['LEFT', 'RIGHT', 'ON THE LINE'];
function directionOfPoint(a, b, p) {
  // subtracting co-ordinates of point A from
  // B and P, to make A as origin
  var bx = b[0] - a[0];
  var by = b[1] - a[1];
  var px = p[0] - a[0];
  var py = p[1] - a[1];
  // Determining cross Product
  var cp = bx * py - by * px;
  if (cp > 0)          // return RIGHT if cross product is positive
    return RIGHT;
  if (cp < 0)         // return LEFT if cross product is negative
    return LEFT;
  // return ZERO if cross product is zero.
  return ZERO;
}
var a = [-30, 10];
var b = [29, -15];
var points = [[15, 28], [22, 11], [10, 22], [-10, 11], [-5, -10]];
for (var i = 0; i < points.length; i++) {
  var p = points[i];
  var res = directionOfPoint(a, b, p);
  // if (res === -1) {
  //   console.log("point " + p + " is LEFT of " + a + ' ' + b);
  // } else if (res === 1) {
  //   console.log("point " + p + " is RIGHT of " + a + ' ' + b);
  // } else if (res === 0) {
  //   console.log("point " + p + " is ON THE LINE " + a + ' ' + b);
  // }

  console.log("point " + p + " is " + TEXT[res] + " of " + a + ' ' + b);
}