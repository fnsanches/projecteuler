function fiboEvenSum(n){
    let fibo = [1, 2, 3];
    for (let i = 3; (fibo[i-2]+fibo[i-1]) <= n; i++){
        fibo.push(fibo[i-2]+fibo[i-1])
    }
    const sum = fibo.reduce((partialSum, a) => {
        if (a % 2 == 0)
            partialSum = partialSum + a;
        return partialSum; 
    }, 0)
    return sum;
}
console.log(fiboEvenSum(10))
console.log(fiboEvenSum(34))
console.log(fiboEvenSum(60))
console.log(fiboEvenSum(1000))
console.log(fiboEvenSum(100000))
console.log(fiboEvenSum(4000000))
