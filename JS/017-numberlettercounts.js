// Problem 17: Number letter counts
// If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

// If all the numbers from 1 to given limit inclusive were written out in words, how many letters would be used?

// Note: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

const str = {
  'units': ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'],
  'tens': ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
}

function numberLetterCounts(limit){
  let sum = 0
  for (let i = 0; i <= limit; i++){
    let currNb = i;
    let nbStr = ''
    let thousands = Math.floor(currNb / 1000)
    if (thousands > 0){
      nbStr += str['units'][thousands] + 'thousand'
      currNb = currNb - (thousands * 1000);
    }
    let hundreds = Math.floor(currNb / 100)
    if (hundreds > 0){
      nbStr += str['units'][hundreds] + 'hundred'
      currNb = currNb - (hundreds * 100)
      if (currNb > 0)
        nbStr += 'and'
    }
    if (currNb < 20){
      nbStr += str['units'][currNb]
    } else {
      let tens = Math.floor(currNb / 10)
      nbStr += str['tens'][tens]
      currNb = currNb - (tens * 10)
      nbStr += str['units'][currNb]
    }
    sum = sum + nbStr.length
  }
  return sum
}

console.log(numberLetterCounts(5));
console.log(numberLetterCounts(150));
console.log(numberLetterCounts(1000));