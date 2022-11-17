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