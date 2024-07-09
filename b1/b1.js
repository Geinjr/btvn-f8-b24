var number = 13;
var newNumber = number;

function isPalindrome(number) {
    const str = number.toString();
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

while (true) {
    if (isPalindrome(newNumber) && isPrime(newNumber)) {
        console.log(newNumber);
        break;
    } else {
        newNumber++;
    }
}
