const reverseString = function(string) {
    charArray = [];
    for (let i = 0; i <= string.length - 1; i++) {
        charArray[i] = string.charAt(i);
    } 
    return charArray.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
