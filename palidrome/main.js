function isPalidrome(str) {
    let cleanStr = str.replace(/[^\w\s]|_/g, '').toLowerCase(); //regExp for deleting everything except alph characters and whitespace
    let strArr = cleanStr.split(''); //array from original string
    let reverseStrArr = strArr.reverse(); //reverse array
    let reverseStr = reverseStrArr.join(''); //male string from reverse arrey without ','
    console.log(reverseStr);

    /* if (cleanStr == reverseStr) {
        return true;
    } else {
        return false;
    } */
    //refactoring

    return cleanStr == reverseStr;
}

//console.log(isPalidrome('notapalidrome')); //false
//console.log(isPalidrome('niin')); //true
//console.log(isPalidrome('Niin')); //true even though has capital letter
//console.log(isPalidrome('n.iin')); //true even though has dot

function isPalidromeShorter(str) {
    let cleanStr = str.replace(/[^\w\s]|_/g, '').toLowerCase(); //regExp for deleting everything except alph characters and whitespace
    let strArr = cleanStr.split(''); //array from original string
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[0] == strArr[strArr.length - 1]) {
            strArr.pop();
            strArr.shift();
            return true;
        }
    }
    return false;
}

console.log(isPalidromeShorter('notapalidrome')); //false
console.log(isPalidromeShorter('niin')); //true
console.log(isPalidromeShorter('Niin')); //true even though has capital letter
console.log(isPalidromeShorter('n.iin')); //true even though has dot