const reverseString = function(string) {
    // let strArray = string.split('')
    // let ansArray = [];
    // let start = strArray.length - 1;
    // for(let i = start; i >= 0; i--){
    //     ansArray[start - i] = strArray[i];
    // }
    // let ans = ansArray.join('');
    // return ans;
    
    return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
