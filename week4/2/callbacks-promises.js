function getMessage(message, cb) { // message value and callback function as params 
    setTimeout(() => {  // async operation
        cb(message);
    }, 1000);
}

// if we continue to call callbacks inside another callbacks the result will be callback hell 
// and it will be difficult to trace, debug 

console.log(1)
getMessage('My first callback function', (msg) => {
    getMessage(`${msg} and my second callback function`, (finalResult) => {
        console.log(finalResult);
    })
})
console.log(3)


function getPromiseMessage(message) {
    return new Promise((resolve, reject) => { // we are returning new promise 
        setTimeout(() => {
            if (message.length) {
                resolve(message); // promise is successfully resolved 
            } else {
                reject('Empty string'); // promise is rejected with error 
            }
        }, 1000)
    })
}


// getPromiseMessage('My promise function').then(message => console.log(message))
getPromiseMessage('My promise string')
    .then(message => `${message} is extended`)
    .then(result => console.log(result))

getPromiseMessage('')
    .then(message => console.log(message))
    .catch(errMessage => console.error(errMessage, 1)) // catch method handles the Promise rejection 


var promise1 = new Promise((resolve, reject) => { //  with this declaration it directly starts to resolve itself  
    setTimeout(()=>resolve('one'),100)
})

var promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('two'),100)
    
})

var promise3 = Promise.resolve('three'); // with Promise resolve you can directly create new Promise object


// console.log(1)
// promise3.then(console.log) // the Promise will be resolved after all synchronius operations 
// console.log(3)


// waits until all promises are resolved 
// @params  - array of promises 
// @return  - array of resolved promises ( in the same order as params ) or rejected reason 
Promise.all([promise1,promise2,promise3]).then( result =>
    console.log('All method result:',result)
).catch(reason => console.error(reason))


// waits until one promises is resolved 
// @params  - array of promises 
// @return  - first promises that is resolved 
Promise.race([promise3,promise2,promise3]) // 
    .then(result => console.log('Race method result:',result))
