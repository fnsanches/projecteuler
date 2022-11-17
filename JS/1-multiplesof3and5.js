// Problem 1: Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.


function multiplesOf3and5(number) {
    let arr = [];
    for (let i = 3; i < number; i += 3) {
      arr.push(i);
    }
    for (let j = 5; j < number; j += 5) {
      if (j % 3 != 0)
        arr.push(j);
    }
    const sum = arr.reduce((partialSum, a) => partialSum + a, 0)
    return sum;
  }

console.log(multiplesOf3and5(49)); // 543
console.log(multiplesOf3and5(1000)); //233168
console.log(multiplesOf3and5(8456));//16687353
console.log(multiplesOf3and5(19564));//89301183
console.log(multiplesOf3and5(9));//14