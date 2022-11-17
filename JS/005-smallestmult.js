// Problem 5: Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {
    const gcd = (a, b) => b == 0 ? a : gcd (b, a % b)
    const lcm = (a, b) =>  a / gcd (a, b) * b
    const lcmAll = (ns) => ns .reduce (lcm, 1)
    const rng = (lo, hi) => [...Array (hi - lo + 1)] .map ((_, i) => lo + i)

    const lcmRng = (lo, hi) => lcmAll (rng (lo, hi))
    return lcmRng(1, n)
}
  
console.log(smallestMult(5));
console.log(smallestMult(7));
console.log(smallestMult(10));
console.log(smallestMult(30));