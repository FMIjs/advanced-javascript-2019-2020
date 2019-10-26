function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 'three';
    yield 'last one';
}

var gen1 = simpleGenerator();
gen1.next();  // Object {value: 1, done: false }
gen1.next(); // Object {value: 2, done: false }
gen1.next(); // Object {value: 'three', done: false }
gen1.next(); // Object {value: 'last one', done: false }
gen1.next() // // Object {value: undefined, done: true }

var gen2 = simpleGenerator();

// for (let value of gen2) { // supported by the iterable protocol
//     console.log(value)
// }



function *fibonacci(){
    let current = 0 ; 
    let next = 1 ; 

    while(true){
        yield current; 
        [current, next]  = [next,next + current ]; 
    }
}

var fib = fibonacci() ;
fib.next();
fib.next();
fib.next();
fib.next();

function *range(start, end, step){
    while(start < end){
        yield start; 
        start += step; 
    }
}

var range1 = range(1,20, 5);
range1.next();
range1.next();
range1.next();
range1.next().value;


function runGenerator(g, val) {
    var it = g(), ret;

    // asynchronously iterate over generator
    (function iterate(val) {

        ret = it.next(val);

        if (!ret.done) {
            setTimeout(() => {
                iterate(ret.val);
            }, 0);
        }

    })(val);
}

function *gen(next){
    console.log('here 1')

    yield setTimeout(() => {
        console.log('here i go in the async')
    }, 1000);

    console.log('here 2' )

    yield setTimeout(() => {
        console.log('here again')
    }, 1000);
}


runGenerator(gen, 'initial');



