var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('it worked');
  },2500)
});

somePromise.then((msg) => {
  console.log('success: ',msg);
}, (errorMsg) => {
  console.log('error: ', errorMsg);
})
