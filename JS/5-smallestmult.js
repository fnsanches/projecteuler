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