//Instead of Promise

//If everithing is well we will get the result data
//If it didn't go well we can see the error message

const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS'];
        //callback('Something happend wrong', 'Result')
        callback(undefined, skills)
    }, 200);
};

doSomething((err, result) => {
    if (err) {
        //return console.log(err);
    }
    //return console.log(result);
})


//Class instance - экземпляр класса

//PROMISE
const doPromise = new Promise((resolve, reject) => { //resolve, reject are callback functions
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS'];
        //resolve(skills)
        reject('Something happend wrong')
    }, 2000)
});

doPromise.then(
    result => {
        //console.log(result)   
    }, error => {
        //console.log(error)   
    }
);

const doPromise2 = new Promise((resolve, reject) => { //resolve, reject are callback functions
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS'];
        if (skills.length > 0) {
            resolve(skills);
        } else {
            reject('Something happend wrong')
        }
    }, 2000)
});

//This is the same, but with catch
doPromise2
    .then(result => {
        //console.log(result)
    })
    .catch(error => {
        //console.log(error)
    }
);

const square = (n) => { 
    return new Promise((resolve, reject) => {
        if (n) {
            resolve(n * n);
        } else {
            reject('You need to pass an argument')
        }
    })
};

square(2)
    .then(res => {
        //console.log(res)
    })
    .catch(err => {
        //console.log(err)
    }
);
//console.log(square(2));
//Figure out how can be a lot of chain then methods.





//ASYNC
//async and await together -> won't work separatly
//async and await for get rid of then-then-then-then
//understand callbacks and promises
//catch try like if/else statement

const square3 = async n => { 
    let value = await new Promise((resolve, reject) => {
        if (n) {
            resolve(n * n);
        } else {
            reject('You need to pass an argument')
        }
    })
    return value;
};

square3(2)
    .then(res => {
        //console.log(res)
    })
    .catch(err => {
        //console.log(err)
    }
);


const url = "https://restcountries.eu/rest/v2/all" //data
const url2 = "https://restcountries.eu/rest/v2/alloooooops!" //error because of mistake in url

//fetch(url)
    //.then(response => response.json())
    //.then(data => console.log(data))
    //.catch(err => console.log(err))

//fetch work in browser, but not in Node

const fetchData = async () => {
    try {
        const response = await fetch(url);
        const countries = await response.json();
        console.log(countries) 
    } catch (err) {
        console.log(err)
    }
}

//fetchData();


//React
//JSX elements, React components, props, state,functional vs class, lifecycle, hooks


