const reverseString = function(text) {
    let charArray = text.split(""); //split string into chars
    let revArray = [];
    // Instead of .reverse() method
    for (let i = charArray.length - 1; i >= 0; i--) {
        revArray.push(charArray[i]);
        text = revArray.join("");
    }
    return text;
};

// Do not edit below this line
module.exports = reverseString;
