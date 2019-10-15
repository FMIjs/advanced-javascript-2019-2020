### WEEK 2.2

## Call, apply, bind methods 
 - Function.prototype.call(thisArgs, arg1,arg2, ...)  - метод, който извиква текущата функция с подаден this аргумент и приема аргументи
 - Function.prototype.apply(thisArg, [ argsArray ]) - метод, който извиква текущата функция с подаден this аргумент и приема масив от аргументи

 - Function.bind(thisArg[, arg1[, arg2[, ...]]]) - метод, който при извикване създава нова функция с конкретен this аргумент. Метода приема и допълнителни агурменти, които ще бъдат подадени към функцията, за която е извикан. 

## Prototyping
Ecmascript няма в себе си имплементация за клас базирано наследяване. Затова на помощ се появява [prototype chain-a](http://dmitrysoshnikov.com/ecmascript/javascript-the-core/).

 - Object.create(proto, [ propertiesObject ]) - създава нов обект, използвайки съществуващ обект като прототип на новия 


## Класове
 - Наследяване 
    ```
        function Animal() {
            this.name = 'Animal'; 
            this.printAnimal = function() {
                console.log('My name is '+ this.name);
            }
        }

        function Rat() {
            Animal.call(this);
            this.name = 'Rat';
        }

        Rat.prototype = Object.create(Animal.prototype); // Създава нов обект, използвайки съществуващ
        Rat.constructor.prototype = Rat; 

        var smallRat = new Rat();
        smallRat.printAnimal(); 
    ```
 - instanceof operator - Оператор, които ни позволява да проверим дали даден обект е инстанция на посочения конструктор 
 ``` object instanceof constructor ```

```
    smallRat instanceof Rat; // true
    smallRat instanceof Animal; // true
```


## Бонус
- Object.assign() - метод за копиране на всички изброими стойности от един или повече обекти към посочения обект. Връща посочения обект. Метода е изключително полезен за копиране на обект(shallow copy) или за обединение на два или повече обекта.

```
    var obj = { a: 1 };
    var copy = Object.assign({}, obj);
    console.log(copy); // { a: 1 }
```

```
    var o1 = { a: 1 }; var o2 = { b: 2 }; var o3 = { c: 3 };
    var newObj = Object.assign(o1, o2, o3);
    console.log(newObj); // { a: 1, b: 2, c: 3 }
    console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.
```

## Ресурси 
 - http://dmitrysoshnikov.com/ecmascript/javascript-the-core/ - Prototype chain, Object.create() Constructors
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype

