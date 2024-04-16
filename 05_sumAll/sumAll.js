const sumAll = function(numOne, numTwo) {
    let sum = 0;
    let start = 0;
    let end = 0;

    if (numOne < 0 || numTwo < 0 || typeof(numOne) !== 'number' || typeof(numTwo) !== 'number') {
        return 'ERROR';
    } else if (numOne < numTwo) {
        start = numOne - 1;
        end = numTwo;
    } else if (numOne > numTwo) {
        start = numTwo - 1;
        end = numOne;
    }
    
    while (start <= end) {
        sum += start;
        start++;
    }
    
    return sum;
}
// Do not edit below this line
module.exports = sumAll;
