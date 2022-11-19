// Problem 16: Power digit sum
// 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

// What is the sum of the digits of the number 2exponent?

function powerDigitSum(exponent) {
    let sum = 0;
    let digits = [];
    digits[0] = 1;
    for (let i = 0; i < exponent; i++){
        let carry = 0;
        let count = digits.length + 1;
        for (let j = 0; j < count; j++){
            let currDigit = digits[j] || 0;
            currDigit = (currDigit * 2) + carry;
            if (currDigit > 9){
                currDigit -= 10;
                carry = 1;
            } else {
                carry = 0;
            }
            digits[j] = currDigit;
        }
    }
    digits.forEach((digit) => {
        sum += digit;
    });
    return sum;

  }

console.log(powerDigitSum(15));
console.log(powerDigitSum(128));
console.log(powerDigitSum(1000));