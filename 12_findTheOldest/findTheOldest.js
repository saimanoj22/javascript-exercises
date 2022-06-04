const findTheOldest = function(list) {
    list.forEach(item => {
        if(!('yearOfDeath' in item)){
            item['yearOfDeath'] = new Date().getFullYear();
        }
    });
    return list.reduce((lastOne, nextOne) => {
        const last = lastOne.yearOfDeath - lastOne.yearOfBirth;
        const next = nextOne.yearOfDeath - nextOne.yearOfBirth;
        return last > next ? lastOne : nextOne;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
