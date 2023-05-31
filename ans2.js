let candyType=[1,1,2,2,3,3]
var candy = function(candyType) {
    let value = candyType.length/2;
    let value2 = candyType.filter((a, b) => candyType.indexOf(a) === b);
    if(value2.length > value) {
        return value
    }
    return value2.length;
};
console.log(candy(candyType))