const removeFromArray = function(array, ...values) {
    for (value of values) {
        let i = 0;
        for (item of array) {
            if (item === value) {
                array.splice(i, 1);
            }
            i++;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
