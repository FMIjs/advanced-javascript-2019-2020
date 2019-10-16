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
  }
}

var emitter = new EventEmitter();

var unsubscribe = emitter.subscribe('event', function (data) {
  console.log(data, 1);
});

emitter.subscribe('event', function (data) {
  console.log(data, 2);
});

emitter.subscribe('event', function (data) {
  console.log(data, 3);
});

unsubscribe();

setTimeout(function () {
  emitter.emit('event', { value: 1000 });
}, 6000);