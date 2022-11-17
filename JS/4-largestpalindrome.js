function is_palindrome(n){
    let str = n.toString().split('')
    let len = str.length
    for (let i = 0; i < len/2; i++){
        if (str[i] !== str[len - 1 - i])
            return false
    }
    return true
}

function largestPalindromeProduct(n) {
    var largest_number = Math.pow(10, n) - 1;
    var smallest_number = Math.pow(10, (n - 1));
    var largest_palindrome = 0;
    for (let i = largest_number; i > smallest_number; i--){
        for (let j = largest_number; j > smallest_number; j--){
            if (i * j > largest_palindrome){
                if (is_palindrome(i * j)){
                    largest_palindrome = i * j;
                    console.log(largest_palindrome, i, j)
                }
            }
        }
    } 
    return largest_palindrome;
}

console.log(largestPalindromeProduct(2))
console.log(largestPalindromeProduct(3))

