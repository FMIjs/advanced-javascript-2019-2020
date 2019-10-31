const fs = require('fs')

const promisify = (func) => (...arg) => new Promise((resolve, reject) => {
    func(...arg, (err, data) => {
        if (err) { reject(err); return; }
        resolve(data);
    })
})


let readFileAsync = promisify(fs.readFile);
let writeFileAsync = promisify(fs.writeFile);

const creditsPromise = readFileAsync( './data/credits.txt', 'utf-8')
const studentsPromise = readFileAsync('./data/students.txt', 'utf-8')
const markPromise = readFileAsync('./data/marks.txt', 'utf-8')
const writeData = (data) => writeFileAsync('./data/results.txt', data)


function handleAllData([creditsData, studentsData, marksData]) {

    let studentsArray = [];
    let parsedCredits = parseCredits(creditsData);
    let parsedStudents = parseStudents(studentsData);
    let parsedMarks = parseMarks(marksData);


    for (let facNum in parsedMarks) {
        
        let studentScore = { "name": parsedStudents[facNum] };
        let i = 0;
        for (let subject in parsedCredits) {
            let calculate = ((+parsedMarks[facNum][i++] / 6) * (+parsedCredits[subject])).toFixed(2);
            studentScore[subject] = calculate;
        }

        studentsArray.push(studentScore );
    }
    return studentsArray;
}


function parseStudents(studentsData) {
    let lines = studentsData.split('\n');
    let result = lines.reduce((acc, line) => {
        let [firstName, lastName, facNumber] = line.split(' ');
        acc[facNumber] = firstName + ' ' + lastName;
        return acc;
    }, {})
    return result;
}

function parseMarks(marksData) {
    let lines = marksData.split('\n');
    const result = lines.reduce((acc, line) => {
        let [facNumber, ...marks] = line.split(' ');
        acc[facNumber] = marks;
        return acc;
    }, {})
    return result;
}

function parseCredits(creditsData) {
    let lines = creditsData.split('\n');
    let [classes, credits] = lines;
    credits = credits.split(' ');
    classes = classes.split(' ');
    return classes.reduce((acc, next, index) => {
        acc[next] = credits[index];
        return acc;
    }, {})
}


Promise.all([creditsPromise, studentsPromise, markPromise])
    .then(handleAllData)
    .then(JSON.stringify)
    .then(writeData)
    .catch(console.error)