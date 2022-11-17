// Problem 9: Special Pythagorean triplet
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

function specialPythagoreanTriplet(n) {
    var c = 0
    for (let a = 1; a < n; a++){
        for (let b = 1; b < n; b++){
            let cSquared = Math.pow(a, 2) + Math.pow(b, 2);
            c = parseInt(Math.sqrt(cSquared));
            if (Math.pow(c, 2) == cSquared){
                if (a + b + c == n)
                    return a * b * c
            }
        }
    }
}
   
console.log(specialPythagoreanTriplet(24));
console.log(specialPythagoreanTriplet(120));
console.log(specialPythagoreanTriplet(1000));