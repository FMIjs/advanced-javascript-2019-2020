
function Person(name, age) { // creating new class Person
    this.name = name;
    this.age = age;
}

Person.prototype.print = function () { // using the prototype chain to add new method 
    console.log('Person name: ' + this.name + ' ' + 'and age' + ' ' + this.age)
}

function Employee(name, age, position) {
    Person.call(this, name, age); // calling Person function with the current 'this' context 
    this.position = position;
}

// Employee.prototype.__proto__ = Person.prototype; 

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.print = function () { // overwriting the print method for Employee
    Person.prototype.print.call(this); // calling Person print method with the current 'this' context
    console.log('Position:' + ' ' + this.position)
}


var graduatedStudent = new Employee('Joro', 21, 'Senior JS Dev'); // creating a new instance
graduatedStudent.print(); // calling the print method 
