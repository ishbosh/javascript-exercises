const sumAll = function(start, end) {
    if (start < 0 || end < 0) {
        return "ERROR";
    } else if (typeof(start) !== "number" || typeof(end) !== "number") {
        return "ERROR";
    } else if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    let sum = 0;

    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
