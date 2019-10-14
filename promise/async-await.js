//async await
//асинхронные функции позволяют писать код так, как если бы он был синхронным

//function with promise
function loadProfile(id) {
    return fetch(`user.json?id=${id}`)
        .then(res => res.json())
        .catch(error => {
            console.log(`Error: ${error.stack}`);
        })
}

loadProfile(123)
    .then(user => {
        console.log(user.name)
    });

//with async await this function can be easier for reading
//because code looks like synchronous
async function loadProfile(id) {
    try {
        const res = await fetch(`user.json?id=${id}`);
        return await res.json();
    }
    catch(error) {
        console.log(`Error: ${error.stack}`);
    }
}

loadProfile(123)
    .then(user => {
        console.log(user.name)
    });

//async functions always return promise
//even if we return something else in the return
//inside the result automatically becomes promise
//await - operator 
//await stops (suspends) function executing and waits for promise result
//await fetch() - waits for request be done
//await res.json() - waits for conversion to the json format

//async gives the oportunity to use try-catch for error handlings (обработки ошибок)