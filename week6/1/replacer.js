const fs = require('fs');
const { Transform } = require('stream');

const readStream = fs.createReadStream('./text.txt', { highWaterMark: 10 });
const writeStream = fs.createWriteStream('./revision.txt');

class RevisionStream extends Transform {

  constructor(opts) {
    super({ ...opts });
    this.rest = null;
    this.dictionary = ['Lorem', 'Ipsum'];
  }

  _transform(chunk, enc, next) {
    chunk = chunk.toString();
    chunk = this.rest ? this.rest + chunk : chunk;
    if (this.rest) { this.rest = ''; }
    if (chunk[chunk.length - 1] !== ' ') {
      const lastIndex = chunk.lastIndexOf(' ');
      this.rest = lastIndex === -1 ? chunk : chunk.slice(lastIndex, chunk.length);
      chunk = lastIndex === -1 ? '' : chunk.slice(0, lastIndex);
    }
    if (!chunk) { return; }
    next(null, this.revision(chunk));
  }

  _flush() {
    if (!this.rest) { return; }
    this.push(this.revision(this.rest));
  }

  revision(string) {
    const pattern = this.dictionary.join('|');
    return string.replace(new RegExp(pattern, 'gi'), val => '*'.repeat(val.length));
  }
}

const re = new RevisionStream();

readStream.pipe(re).pipe(writeStream);
