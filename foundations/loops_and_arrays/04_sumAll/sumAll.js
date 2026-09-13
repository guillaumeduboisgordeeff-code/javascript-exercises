const sumAll = function(intA,intB) {
 let arr =[]
if(intA < 0 || intB <0 || !Number.isInteger(intA) || !Number.isInteger(intB)) {
return "ERROR";
} else { 
    const minInt=Math.min(intA,intB);
    const maxInt=Math.max(intA,intB);
    for (let i=minInt;i<=maxInt;i++) {arr.push(i);}
}
return arr.reduce((sum,current)=>sum+current,0);
}


// Do not edit below this line
module.exports = sumAll;
