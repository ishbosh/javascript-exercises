const repeatString = function(string, num) {
    if (num > 0) {
        let repetition = string;
    
        for (let i = 0; i < num - 1; i++) {
            repetition = repetition + string;
        }
        return repetition;
    } else if (num < 0) {
        return "ERROR";
    } else {
        return "";
    }
};

// Do not edit below this line
module.exports = repeatString;
