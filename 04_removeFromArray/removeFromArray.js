const removeFromArray = function(myArray, ...itemsToRemove) {
    const filteredArr = myArray.filter(checkItems);
    
    function checkItems (item) {
        return !itemsToRemove.includes(item);
    }
    
    return filteredArr;
};

/*
    Filter through the array with a condition (creates a shallow copy of the array with the elements that pass the test a.k.a condition)
    True - includes the element
    False - excludes the element
*/


// Do not edit below this line
module.exports = removeFromArray;
