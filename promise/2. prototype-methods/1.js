//CREATE PROMISE
var momsPromise = new Promise(function (resolve, reject) {
  momsSavings = 20000;
  priceOfPhone = 60000;
  if (momsSavings > priceOfPhone) {
    resolve({
      brand: "iphone",
      model: "13pro",
    });
  } else {
    reject("We don't have enough savings. Let's save some more money.");
  }
});

//HANDLE PROMISE
momsPromise.then(function (value) {
  console.log("Hurray I got this phone as a gift ", JSON.stringify(value));
});
momsPromise.catch(function (reason) {
  console.log("Mom coudn't buy me the phone because ", reason);
});
momsPromise.finally(function () {
  console.log(
    "Irrespecitve of whether my mom can buy me a phone or not, I still love her"
  );
});
