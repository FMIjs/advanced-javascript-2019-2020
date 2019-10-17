// Task 1 - Implement event emitter
function EventEmitter() {
  var subs = {};

  this.subscribe = function (eventName, cb) {
    // if (!subs[eventName]) {
    //   subs[eventName] = [];
    // }
    // subs[eventName].push(cb);
    subs[eventName] = (subs[eventName] || []).concat(cb);
    return function () {
      // var idx = subs[eventName].findIndex(function (item) { return item === cb; })
      // if (idx === -1) { return; }
      // subs[eventName].splice(idx, 1);

      subs[eventName] = subs[eventName].filter(function (item) { return item !== cb; })
    }
  };

  this.emit = function (eventName, data) {
    // if (!subs[eventName]) { return; }
    // subs[eventName].forEach(cb => cb(data));

    (subs[eventName] || []).forEach(cb => cb(data));
  };
}

// var emitter = new EventEmitter();

// var unsubscribe = emitter.subscribe('event', function (data) {
//   console.log(data, 1);
// });

// emitter.subscribe('event', function (data) {
//   console.log(data, 2);
// });

// emitter.subscribe('event', function (data) {
//   console.log(data, 3);
// });

// unsubscribe();

// setTimeout(function () {
//   emitter.emit('event', { value: 1000 });
// }, 6000);

// Task 2 - Extend the event emitter to FileEmitter
var fs = require('fs');

function FileEmitter(config) {
  config = config || {};
  EventEmitter.call(this);
  var _emit = this.emit;
  this.emit = function (fileName) { // monkey patching
    fs.readFile(fileName, {
      encoding: config.encoding || 'utf-8'
    }, function (err, content) {
      if (err) { console.error(err); return; }
      _emit(fileName, content);
    });
  }
}

FileEmitter.prototype = Object.create(EventEmitter.prototype);

var readFileEmitter = new FileEmitter();


readFileEmitter.subscribe('text.txt', function (fileContents) {
  console.log(fileContents);
});

readFileEmitter.emit('text.txt');

// > sdafgvskfadwlsdnfxvkdw;las,xz.mcnfdkjlek;as/`z