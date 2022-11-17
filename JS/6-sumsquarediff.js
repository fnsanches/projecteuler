// Problem 6: Sum square difference
// The sum of the squares of the first ten natural numbers is,

// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

function sumSquareDifference(n){
    const nb = Array(n).fill(0).map((_, i) => i + 1);
    var diff = 0;
    const squareSum = Math.pow(nb.reduce((pV, cV) => pV + cV, 0), 2);
    const sumSquare = nb.map((x) => Math.pow(x, 2)).reduce((pV, cV) => pV + cV, 0);
    diff = Math.abs(squareSum - sumSquare)

    return diff;
}

console.log(sumSquareDifference(10));
console.log(sumSquareDifference(20));
console.log(sumSquareDifference(100));