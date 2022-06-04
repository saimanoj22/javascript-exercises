const findTheOldest = function(list) {
    list.forEach(item => {
        if(!('yearOfDeath' in item)){
            item['yearOfDeath'] = new Date().getFullYear();
        }
    });
    const array = list.sort(function(lastOne, nextOne){
        const last = lastOne.yearOfDeath - lastOne.yearOfBirth;
        const next = nextOne.yearOfDeath - nextOne.yearOfBirth;
        return last > next ? -1 : 1;
    });
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
