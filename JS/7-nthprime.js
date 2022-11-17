// Problem 7: 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the nth prime number?

function isPrime(number){
    for (let i = 2; i < number; i++){
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function nthPrime(n){    
    var primes = [2,3,5]
    for (let i = 5; primes.length < n + 1; i++){
        if (isPrime(i)){
            primes.push(i)
        }
    }
    return primes[primes.length - 1]
}

console.log(nthPrime(6));
console.log(nthPrime(10));
console.log(nthPrime(100));
console.log(nthPrime(1000));
console.log(nthPrime(10001));