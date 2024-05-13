// define a promise
let countValue = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Promise resolved!");
    }, 5000);
});

// executes when promise resolves
countValue.then(function successValue(result) {
    console.log(result);
});

// Output: Promise resolved!