var fs = require('fs');


// Task: Read studendts.txt file and calculate for each individual student his average scores
// After that seave all results into result.txt file with the following format: 
// <FN_NUMBER> <AVG_SCORE>
fs.readFile('./students.txt', { encoding: 'utf-8' }, function (err, data) {
  console.log(data);
});

fs.readFile('./students.txt', { encoding: 'utf-8' }, function (err, data) {
  console.log(data);
});
console.log('Hello!');