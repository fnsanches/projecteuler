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