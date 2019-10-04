'use strict';
// Scoping
// Hoisting
// Event Loop


// var a = 10;

// function test() {
//   var b = 10;
//   console.log(a);
// }

// console.log(b);

// test();

// IIFE
var lib = (function () {
  privateFunction();
  // Hoisting -> https://scotch.io/tutorials/understanding-hoisting-in-javascript
  var a;
  var b;
  var c;
  console.log(y); // > undefined
  y = 100;
  function privateFunction(e) {
    console.log(e, y);
  }

  // var a = 10;
  // var a = 20;
  // some other code ...
  function test(e) {
    privateFunction(e);
  }

  // function otherTest() {

  // }
  // otherTest();
  // var otherTest = function () {

  // };



  var y = '100';
  // var exported = {
  //   test: test,
  //   otherTest: otherTest
  // };
  // return exported;
  return {
    test: test,
    otherTest: otherTest
  };
  // return test;
})();

lib.test(10);







// code ...

setTimeout(function () {

}, 2000)

// code ...



// code ...


// code ...