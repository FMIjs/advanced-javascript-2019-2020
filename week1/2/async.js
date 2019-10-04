function showText() {
  console.log('text start');

  setTimeout(function () {
    console.log('My first async operation!');
  }, 5000);
  console.log('text end')
}
function main() {
  console.log('main start');
  showText();
  console.log('main end');
}

main();

// 15 -> 10 -> 11 -> 2 -> 4 -> 7 -> 12 -> 16 | stack end ... -> 5