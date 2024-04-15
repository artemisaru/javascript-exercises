const repeatString = function(myString, myNum) {
    let oldString = myString;
    let myArr = [];

    if (myNum >= 0) {
        for (let i = 0; i < myNum; i++) {
            myArr[i] = oldString;
        };
        return myArr.join("");
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
