// const pr = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     // resolve(100);
//     reject(new Error('Test'));
//   }, 1000);
// });

// pr.then(function (val) {
//   console.log(val); // val
// }).catch(function (err) {
//   console.log(err);
//   return Promise.reject(err);
// }).then(function () {
//   console.log('Hello!');
// });

Promise.resolve().then(() => console.log(123));
console.log('Hello!');
process.nextTick(() => console.log(123));
// > Hello!
// > 123

