### Week4.2

## Callbacks 
Както знаем функциите в javascript са първокласни жители и можем да подаваме функции като параметри на дадена функция.
```
 function callMom(number, phoneCall){ // call your mom after 5 sec.
     setTimeout(()=> phoneCall(number), 5000)
 }
```
В горния пример ```phoneCall``` функцията е параметър на ```callMom```. 
``` phoneCall ``` се явява callback функция. 
Callback  функциите често се използват при асинхронни операции, за да изчакаме и манипулираме получения резултат.

Но когато започнем да използваме много вложени callback функции (callback hell) кода става нечетим и труден за осмисляне / проследяване и debugging.

Затова на помощ идват ES6 Promises.

## ES6 Promises 

Promise е обек, който може в бъдеще да изведе стойност като резултат. Стойността може успешно да бъде изведена или да получите причина, защо не успешно изведена. 


```Promise``` имат 4 състояния: 
 * pending (изчакващо) - първоначално състояние, нито изпълнено или отхвърлено.
 * fullfield (изпълнено) - операцията е завършила успешно.
 * rejected (отказано) - операцията не е завършила успешно
 * settled (установен)  - операцията е завършила успешно или е отказана


```
new Promise(executor: (resolve, reject )

@param executor — A callback used to initialize the promise. This callback is passed two arguments: a resolve callback used to resolve the promise with a value or the result of another promise, and a reject callback used to reject the promise with a provided reason or error.

Creates a new Promise.
```


![promises-es6](https://mdn.mozillademos.org/files/15911/promises.png)


## ES7 Async Await 
```async function ``` декларацията ви помага да пишете асинхронни операции, които повече наподобяват писането на синхронен код.
Те ви предоставят различен синтаксис за извикване на Promise. 

Async / await функциите се декларират по следния начин: 
```
async function funcName(){ 
    try{
        let result1 = await Promise.resolve(1); 
        let result2 = await Promise.resolve('second');
        let result3 = await promise3; // promise , which is declared outside 
    }catch(err){
        ...
    }
}
```

Използването на ключовата дума await блокира изпълнението на кода докато не се resolve-не или reject-не Promise.
За да се хванат грешки или reject състояние при изпълнението на ```async function``` може да се добави ```try{}catch(err){}``` клаузата. 


## ES6 Генератори
Генераторите ни позволяват да създадем итеративен алгоритъм използвайки една функция.
Генераторните функции се декларират посредством ```function* generator()``` и функцията се изпълнява докато не срещне ключовата дума ```yield ```.

![es6-generators](https://miro.medium.com/max/1522/1*7X8rtWOiz5RKENZ_vugmKg.png)

## Ресурси 
 - https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced - callbacks 
 - https://developer.mozilla.org/bg/docs/Web/JavaScript/Reference/Global_Objects/Promise - Promises, Promise.resolve(), Promise.reject(), Promise.race(), Promise.all() 
 - https://javascript.info/async-await - async await 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function -async await 
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols - Iteration protocol  
 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators - Iterator and Generators
 - https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950 - Generators 