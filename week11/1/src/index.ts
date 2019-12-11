import * as fs from 'fs';
const prop = Symbol('prop');

function test(config: { name: string }) {
  return function (target: any) {
    debugger;
    // target.prototype[prop] = config.name;
    return class {
      constructor(...args: any[]) {
        console.log(args);
        const t = new target(...args);
        return t;
      }
    } as any;
  }
}

@test({ name: 'dsads' })
class User {
  constructor() {
    console.log(Object.getPrototypeOf(this)[prop]);
  }
}

const u = new User();

// fs.readFile('./text', (err, data) => {

// });

// function logg(text: string) {
//   console.log(text);
// }

// logg('sadasdads');


// // const b: Int16Array = new Int16Array(2);
// // const c: string = 'dsada';


// function identity<T>(arg: T): T {
//   return arg;
// }

// const a = identity(1);
// a.toFixed(2);



// function test2(a: number | string) {
//   if (typeof a === 'number') {
//     a.toFixed(2);
//   } else {
//     console.log(a);
//   }
// }


// class A {
//   a = 1;
// }

// class B {
//   b = 1
// }


// class Test<T = A | B> {

// }

// const a: A & B = { a: 1, b: 1};