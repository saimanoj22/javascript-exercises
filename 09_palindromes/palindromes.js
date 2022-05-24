const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^a-z]/g, "");
    revString = string.split('').reverse().join('');
    return string === revString;
};

// Do not edit below this line
module.exports = palindromes;
