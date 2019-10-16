// function getName() {
//   console.log(this.name);
// }

// getName();

// var obj = {
//   name: 'Test',
//   getName: getName
// }

// obj.getName();

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.myMethod = function () {
//   return this.age + 20;
// }

// var u1 = new User('Ivan', 20);
// var u2 = new User('Ivan', 20);

function Person(name, age) {
  this.name = name;

  this.getAge = function () {
    return age;
  }
}

Person.prototype.test = 1;

Person.prototype.something = function () {
  console.log(1);
}

function Employee(name, age, position) {
  Person.call(this, name, age); // (like calling super) bind, apply
  this.position = position;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.something2 = function () {
  console.log(2);
}

var e = new Employee('Ivan', 20, 'sdas');
e.test;
