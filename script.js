"use strict"; 

// 1
var max = (a, b) => a > b? a : b;
// 2
var maxOfThree = (a, b, c) => max(max(a, b), max(a, c));
// 3
var isVowel = c => "aeiou".indexOf(c) > -1;
// 4 - need change
var boringSum = nums => {
    let total = 0;
    for(let num of nums) total += num;
    return total;
}
var boringMultiply = nums => {
    let total = 1;
    for(let num of nums) total *= num;
    return total;
}
// 5
var reverse = str => str.split``.reverse().join``;
// 6
var findLongestWord = arr => arr.reduce((a, b) => a.length > b.length? a : b, "");
// 7
var filterLongWords = (arr, length) => arr.filter(a => a.length > length);
// 8
var computeSumOfSquares = arr => arr.reduce((a, b) => a + b**2, 0);
// 9
var printOddNumbersOnly = arr => arr.filter(a=>a%2).forEach(el => {
    console.log(el);
});
// 10
var computeSumOfSquaresOfEvensOnly = arr => arr.filter(a=>!(a%2)).reduce((a, b) => a + b**2, 0);
// 11
var sum = nums => nums.reduce((a, b) => a + b, 0);
var multiply = nums => nums.reduce((a, b) => a * b, 1);
// 12
var printFibo = (n, a, b) => {
    for(let i = 0; i < n; i++){
        let temp = a;
        a = b;
        b = temp + b
        console.log(temp);        
    }
}