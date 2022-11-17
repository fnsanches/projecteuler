// Problem 10: Summation of primes
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below n.

function eratosthenes(n) {
    let sqrt = Math.sqrt(n);
    let sieve = new Array(n).fill(0)

    for (let primeCan = 2; primeCan < sqrt; primeCan++){
        if (sieve[primeCan] === true){
            continue
        }
        for (let mult = primeCan * primeCan; mult < n; mult +=primeCan){
            if (sieve[mult] === 0){
                sieve[mult] = true
            }
        }
    }
    return sieve
        .map((isPrime, i) => ({i, isPrime}))
        .filter(({i, isPrime}) => isPrime === 0 && i >= 2)
        .map(({ i }) => i)
}

function primeSummation(n) {
    var primes = eratosthenes(n);
    return primes.reduce((pV,cV) => pV + cV, 0);
  }

  console.log(primeSummation(17));
  console.log(primeSummation(2001));
  console.log(primeSummation(140759));
  console.log(primeSummation(2000000));