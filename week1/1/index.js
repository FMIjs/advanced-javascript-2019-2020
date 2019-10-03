// declaring variables
var test = 'test';
var best;
console.log(best) // > undefind
best = test;
test = test + '111';
console.log(test); // > 'test111'
console.log(best); // > 'test'

console.log(10 + '15'); // > '1015' (implicit conversion/coersion to string)
// two types of equality operators:
// == (implicit conversion/coersion) - Abstract Equality Comparison
// === (no implicit conversion/coersion) - Strict Equality Comparison
// always use the === to limit side effects

console.log(1 == '1'); // > true (Abstract Equality Comparison)
console.log(1 === '1'); // > false (Strict Equality Comparison)
//(more info can be found here: https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf
// section 7.2.14 and 7.2.15)

// conditionals if ... else if ... else 
if (true) {
  console.log('HELLO!');
} else if (false) {

} else {

}
// automatic semicolon insertion (https://www.ecma-international.org/publications/files/ECMA-ST/ECMA-262.pdf 11.9.1)
// examples - https://en.wikibooks.org/wiki/JavaScript/Automatic_semicolon_insertion
// don't forget to write your semicolons!

// function declaration
function sumDeclaration(a, b) {
  return a + b;
}

// function expression (anonymous function / no name)
var sumExpression = function (a, b) {
  return a + b;
};

// do while loop
var i = 0
do {
  console.log('do - while');
  i++;
} while (i < 10);

var b = 10;
// while loop
while (b > 0) {
  b--;
  console.log('while - do');
}

var arr = [1, 2, 3, 4]; // arrays
console.log(arr[1]) // > 2

// objects are key value pairs (dictionaries)
var obj = {
  prop1: 'prop1',
  prop: 1
};

console.log(obj.prop); // > 1
console.log(obj['prop1']) // > 'prop1'

// swaping two elements
var a = 4, c = 5;
c = [a, a = c][0];
console.log(a, c);