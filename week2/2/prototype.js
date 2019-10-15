var foo = {
    x: 10,
    y: 20,
}

foo.x === foo['x']  // true;  different ways to access the value



var a = {
    x: 10,
    calculate: function (z) {
        return this.x + this.y + z;
    }
};

var b = {
    y: 20,
    __proto__: a // re-asigning  __proto__ to 'a' object 
};

var c = {
    y: 30,
    __proto__: a // re-asigning  __proto__ to 'a' object 
};

b.calculate(2);
c.calculate(4);

var b = Object.create(a, {y: {value: 20}}); // creating brand new object, using the existing one and extending it
var c = Object.create(a, {y: {value: 30}});


