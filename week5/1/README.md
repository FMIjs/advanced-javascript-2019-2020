# JS за Напреднали, Седмица 5, Упражнение
## 30.10.19

### Бърз тест
  1. Какво ще се изпише в конзолата след изпълнението на долното парче код?
      ```javascript
      const job = () => new Promise(function(resolve, reject) {
        reject();
      });

      let promise = job();

      promise.then(function() {
        console.log('Success 1');
      })
      .then(function() {
        console.log('Success 2');
      })
      .then(function() {
        console.log('Success 3');
      })
      .catch(function() {
        console.log('Error 1');
      })
      .then(function() {
        console.log('Success 4');
      });
      ```

  2. Какво ще се изпише в конзолата след изпълнението на долното парче код?
      ```javascript
      const job = (state) => new Promise(function(resolve, reject) {
        if (!state) {
          reject('error');
          return;
        }
        resolve('success');
      });

      let promise = job(true);

      promise.then(function(data) {
        console.log(data);
        return job(false);
      })
      .catch(function(error) {
        console.log(error);
        return 'Error caught';
      })
      .then(function(data) {
        console.log(data);
        return job(true);
      }).catch(function(error) {
        console.log(error);
      });
      ```
---
### Задачи

1. Напишете функция promisify, която взима като аргумент асинхронна функция f от вида - asyncFunc(arg1, arg2, arg3, cb)
 и връща нова функция, която при извикването си връща Promise, който обработва f.

      Пример:
      ```
      const fs = require('fs');

      const readFilePromise = promisify(fs.readFile);

      readFilePromise('/path/to/file')
        .then(console.log)
        .catch(console.error);
      ```

2. Прочетете следното съдържание от посочените файлове. Пресметнете успеха на всеки студент, като оценката зависи от оценката и кредитите за съответния предмет (score = (receives/6) * credits ). Дадените кредити (в credits.txt) са за отличен успех. Запазете резултата в results.txt. Използвайте Promises и Promise.all, за да решите задачата.

    ### Input files:
    Students file:
    ```
    Ivan Ivanov 441
    Petko Petkov 442
    Alex Alexandrov 443
    ```
    Marks file:
    ```
    441 5.0 5.5 6.0
    442 3.5 4.0
    443 6.0 6.0 6.0
    ```
    Credits file:
    ```
    mathematics literature geography
    10.0 10.0 8.0
    ```
    ### Output file:
    ```
    {"name":"Ivan  Ivanov","mathematics":"8.33","literature":"9.17","geography":"8.00"},
    {"name":"Petko  Petkov","mathematics":"5.83","literature":"6.67","geography":"5.33"},
    {"name":"Alex  Alexandrov","mathematics":"10.00","literature":"10.00","geography":"8.00"}
    ```



