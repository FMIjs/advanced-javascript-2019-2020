// async function simpleFunc(){
//     return 2; 
// }


// console.log(1)

// simpleFunc().then(console.log)

// console.log(3)



var promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('one'),100)
})

var promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('two'),100)
    
})

var promise3 = Promise.resolve('three'); // with Promise resolve you can directly create new Promise object


// syntax sugar for Promises 
async function getMessageAsync(){ // async / await  makes async code to look like sync 
    try{
        let res1 = await promise1;
        let res2 = await promise2; // wating for the promise to be resolved/rejected 
        console.log(res1 + " " +  res2);
    }catch(err){ 
        console.error(err, 22); // if there is errors / rejections it will be handled here 
    }
}

// await promise3;  // you are not able to use await outside of async function 
//  | exception -> its possible in chrome console, because await is wrapped automatically in async function 

getMessageAsync();