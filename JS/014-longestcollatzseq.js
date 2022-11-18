// Problem 14: Longest Collatz sequence
// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under the given limit, produces the longest chain?

// Note: Once the chain starts the terms are allowed to go above limit.

// TODO: find a faster way

function longestCollatzSequence(limit) {
    let biggestSeq = [];
    for (let i = limit; i > 0; i--){
        let n = i;
        let currSeq = [];
        // console.log(" start = " + n)
        while (n !== 1){
            currSeq.push(n);
            if (n % 2 == 0)
                n /= 2;
            else
                n = (3 * n) + 1;
        }
        // console.log(currSeq.length)
        if (biggestSeq.length < currSeq.length)
            biggestSeq = currSeq;
    }
    return biggestSeq[0];
  }
  
  console.log(longestCollatzSequence(14));
  console.log(longestCollatzSequence(5847));
//   console.log(longestCollatzSequence(46500));
//   console.log(longestCollatzSequence(54512));
//   console.log(longestCollatzSequence(100000));
//   console.log(longestCollatzSequence(1000000));