var fs = require('fs');

fs.readFile('./students.txt', { encoding: 'utf-8' }, function (err, data) {
  console.log(data);
});

fs.readFile('./students.txt', { encoding: 'utf-8' }, function (err, data) {
  console.log(data);
});
console.log('Hello!');