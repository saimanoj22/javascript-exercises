const repeatString = function(string, number) {
    if(number < 0){
        return "ERROR";
    }
    let ans = '';
    for(let i = 0; i < number; i++){
        ans += string;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
