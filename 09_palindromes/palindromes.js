const palindromes = function (str) {
    let punctuation = /[\.,?!\s]/g;
    strWithoutPunctuation =  str.replace(punctuation, "");
    return str.split('').reverse().join('').toLowerCase().replace(punctuation, "").includes(strWithoutPunctuation.toLowerCase());
};

// Do not edit below this line
module.exports = palindromes;
