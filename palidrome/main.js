function isPalidrome(str) {
    let strArr = str.split(""); //array from original string
    let reverseStrArr = strArr.reverse(); //reverse array
    let reverseStr = reverseStrArr.join(''); //male string from reverse arrey without ','

    if (str == reverseStr) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalidrome("notapalidrome")); //false
console.log(isPalidrome("niin")); //true