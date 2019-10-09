var fs = require('fs');

// Task: Read studendts.txt file and calculate for each individual student his average scores
// After that seave all results into result.txt file with the following format: 
// <FN_NUMBER> <AVG_SCORE>
fs.readFile('./students.txt', { encoding: 'utf-8' }, function (err, data) {
  if (err) { console.error(err); return; }
  var result = data.split('\n').reduce(function (lineAcc, line, index, arr) {
    var lineArr = line.split(' ');
    var fnNumber = lineArr[2];
    var scoresStrArr = lineArr.slice(3);
    var avgScore = scoresStrArr.reduce(function (acc, currScoreStr) {
      return acc + +currScoreStr;
    }, 0) / scoresStrArr.length;
    return lineAcc + fnNumber + ' ' + avgScore.toFixed(2) + ((index === arr.length - 1) ? '' : '\n');
  }, '');
  fs.writeFile('result.txt', result, function (err) {
    if (err) { console.error(err); return; }
    console.log('Operation completed...');
  });
});
