// Reverse a String With Built-In Functions //

const reverseStr = (str) => {
    let splitStr = str.split("");
    let reverse = splitStr.reverse();
    let joinedArr = reverse.join("");
    return joinedArr;
}

const reverseStr2 = (str) => {
    return str.split('').reverse().join('');
}

// with a for loop //
const reverseStr3 = (str) => {
    let newStr = "";
    for (let index = 0; str.length -1 >=0 ; index--) {
        newStr += str[index];
    }
    return newStr;
}

