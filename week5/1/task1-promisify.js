/*
    Напишете функция promisify, която взима като аргумент асинхронна функция f
    от вида - asyncFunc(arg1, arg2, arg3, cb) 
    и връща нова функция, която при извикването си връща Promise,
    който обработва f.
    Пример:
*/

const fs = require('fs');
const promisify = (asyncFunc) => ( ...args) => new Promise((resolve,reject)=>{
        asyncFunc(...args,(err,data)=>{
            if(err){reject(err); return; }
            resolve(data);
        });
    })

const readFilePromise = promisify(fs.readFile);

readFilePromise(__dirname + '/text.txt', 'utf-8')
    .then(console.log)
    .catch(console.error)
