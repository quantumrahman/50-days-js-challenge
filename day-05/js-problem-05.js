// let's solve:
function reverseTheString(str) {
    let arrayOfStr = str.split('');
    let reverseStr = arrayOfStr.reverse().join('');
    return reverseStr;
};

console.log(reverseTheString('Hello world!'));

/*
    output: !dlrow olleH;
*/