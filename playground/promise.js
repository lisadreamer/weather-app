var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      } else {
        reject('arg must be numbers');
      }
    },1500)
  });
}

asyncAdd(13,17)
  .then( (res) => {
    console.log('13 + 17 = ',res);
    return asyncAdd(res, 5);
  })
  .then((res) => {
    console.log('13 + 17 + 7 =',res);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  });
// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('it worked');
//   },2500)
// });
//
// somePromise.then((msg) => {
//   console.log('success: ',msg);
// }, (errorMsg) => {
//   console.log('error: ', errorMsg);
// })
