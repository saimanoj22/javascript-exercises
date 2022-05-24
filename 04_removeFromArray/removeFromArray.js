const removeFromArray = function(array, ...args) {
    let ansArray = [];
    let present = true;
    for(let i = 0; i < array.length; i++){
        present = true;
        for(let j = 0; j < args.length; j++){
            if(array[i] === args[j]){
                present = false;
            }
        }
        if(present === true){
            ansArray.push(array[i]);
        }
    }
    return ansArray;
};

// Do not edit below this line
module.exports = removeFromArray;
