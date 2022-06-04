const fibonacci = function(number) {
    if(number < 0)return "OOPS";
    if(number == 0)return 0;
    if(number == 1 || number == 2)return 1;
    let a = 1, b = 1,c = 0;
    for(let i = 2; i < number; i++){
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
