const removeFromArray = function(arr) {
    for(let i=1;i<arguments.length;i++){
    arr=arr.filter(item=>item!==arguments[i]);
    }
    return arr;
}
console.log(removeFromArray([1,2,3,4,5],2,3));
// Do not edit below this line
module.exports = removeFromArray;
