let asyncSum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers')
            }
        }, 200);
    })
}

//promise has three states
//pending - waiting
//fulfilled - true
//rejected - false

//function returns not the result, but promise object
//constructor promise takes function as an argument
//this is executor function
//it takes two params - resolve and reject


console.log(asyncSum(7, 3))
asyncSum(7, 3)
    .then((result) => {
        console.log(result);
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    })


//methods then and catch return new promise
//so we can use promise chaining

//callback hell - вложенные коллбеки

//static methods:
//Promise.resolve(x)
//Promise.reject(x)
//Promise.all(iterable) (param - array of promises and returns new promise which will be resolved after all promises from list will be resolved)
//Promise.race(iterable) (when you need to wait when first promise will be resolved)