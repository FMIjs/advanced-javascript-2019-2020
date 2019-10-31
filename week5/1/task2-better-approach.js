const fs = require('fs');

const promisify = (func) => (...arg) => new Promise((resolve, reject) => {
  func(...arg, (err, data) => {
    if (err) { reject(err); return; }
    resolve(data);
  })
})

const readFile = promisify(fs.readFile);
const writeFile = (...args) => (data) => promisify(fs.writeFile)(...args, data);

const studentsFile = () => readFile('./data/students.txt', 'utf-8');
const marksFile = () => readFile('./data/marks.txt', 'utf-8');
const creditsFile = () => readFile('./data/credits.txt', 'utf-8');

const calculateCredit = (total, studentMark) => studentMark === 2.0 ? 0 : (total * studentMark) / 6;
const stringify = data => data.toString();

const splitLines = data => data.split('\n');
const splitEmptySpaces = data => data.split(/\s/g);

const parseStudents = () => studentsFile()
  .then(stringify)
  .then(splitLines)
  .then(studentsArray => studentsArray.reduce((acc, student) => {
    const studentArr = splitEmptySpaces(student);
    acc[studentArr[2]] = `${studentArr[0]}  ${studentArr[1]}`;
    return acc;
  }, {}));

const parseMarks = () => marksFile()
  .then(stringify)
  .then(splitLines)
  .then(lineArray => lineArray.reduce((acc, line) => {
    const currentLineArray = splitEmptySpaces(line);
    acc[currentLineArray[0]] = currentLineArray.slice(1);
    return acc;
  }, {}));

const parseCredits = () => creditsFile()
  .then(stringify)
  .then(splitLines)
  .then(data => data.map(line => splitEmptySpaces(line)))
  .then(data => data[0].reduce((acc, curr, index) => {
    acc[curr] = data[1][index];
    return acc;
  }, {}));


Promise.all([parseStudents(), parseMarks(), parseCredits()]).then(([students, marks, credits]) => {
  const subjects = Object.keys(credits);
  return Object.keys(students).map(key => {
    const obj = {
      name: students[key]
    };
    subjects.map((subject, index) => {
      obj[subject] = calculateCredit(credits[subject], marks[key][index]).toFixed(2);
    });
    return JSON.stringify(obj);
  }).toString();
}).then(writeFile('./data/results.txt')).catch(console.error);
