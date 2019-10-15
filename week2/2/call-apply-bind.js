var car = {
    brand: 'Toyota', 
    type:'truck', 
    print: function(ownerName){
        console.log(this.brand + ' ' + this.type  + ' and the owner is ' + ' ' + ownerName  ); 
    }
}


var opel = {
  brand: 'Opel',
  type: 'Sedan'
}

car.print.call(opel, 'Joro'); // directly execution the function with the new context

car.print.apply(opel, ['Joro']); // passing the args as array

var myCar = car.print.bind(opel,'Joro'); //creating a new function with a different context





// Arguments object 
function print(name, university){
  console.log(arguments); // array like object, represents all of the passed arguments to the function
  console.log('Greetings from'+ ' '+ name + '.' + ' He is studing in' + ' ' + university)
} 

print('Joro', 'Sofia University', 'Third Argument');


// Array.prototype.map method - loops through all elements of the array and returns new array
// receives function with 3 parameters (value, index, currentArr)
var newArray = [1, 2, 3, 4].map(function (value, index, currentArr) {
  return value * 2;
})
