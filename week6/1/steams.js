const { Readable, Writable, Transform } = require('stream');

const { createReadStream } = require('fs');
// const res = createReadStream('./file.txt');
class MyReadableStream extends Readable {
  _read() {
    for (let i = 0; i < 10; i++) {
      this.push(i.toString());
    }
    this.push(null);
  }
}

class MyWritableStream extends Writable {
  constructor(opts) {
    super(opts);
    this.result = '';
  }
  _write(chunk, encoding, next) {
    this.result = this.result + chunk;
    next();
  }
}

class MyTransformStream extends Transform {
  _transform(chunk, encoding, next) {
    next(null, chunk ? `${+chunk + 10}` : null);
  }
}

const str = new MyReadableStream();
const res = new MyWritableStream();
const trs = new MyTransformStream();
res.on('pipe', function () {
  console.log('Stream was piped');
});

res.on('finish', function () {
  console.log('result:', this.result);
});

setTimeout(function () {
  str.pipe(trs).pipe(res);
}, 1999);