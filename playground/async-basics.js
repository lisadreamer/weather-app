console.log('start');

setTimeout((err) => {
  console.log('inside of callback');
}, 2000);

setTimeout(() => {
  console.log('2callback');
}, 0);

console.log('end');
