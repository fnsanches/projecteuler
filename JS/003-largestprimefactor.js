// Problem 3: Largest prime factor
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the given number?

function largestPrimeFactor(number){
    let maxPrime = -1;
    while (number % 2 == 0){
        number /= 2;
        maxPrime = 2;
    }
    while (number % 3 == 0){
        number /= 3;
        maxPrime = 3;
    }
    for (let i = 5; i <= Math.sqrt(number); i+= 6){
        while (number % i == 0){
            maxPrime = i;
            number /= i;
        }
        while (number % (i + 2) == 0){
            maxPrime = i + 2;
            number /= (i + 2);
        }
    }
    if  (number > 4)
        return number;
    return maxPrime;
}

console.log(largestPrimeFactor(2))
console.log(largestPrimeFactor(3))
console.log(largestPrimeFactor(5))
console.log(largestPrimeFactor(7))
console.log(largestPrimeFactor(8))
console.log(largestPrimeFactor(13195))
console.log(largestPrimeFactor(600851475143))