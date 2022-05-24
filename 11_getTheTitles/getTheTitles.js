const getTheTitles = function(list) {
    let array = [];
    for(let i = 0; i < list.length; i++){
        array.push(list[i].title);
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
