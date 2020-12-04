altcase = function altcase(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g,
    
     function(match, chr) {
        return chr ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(altcase('upperCASE'));
console.log(altcase('LOWERcase'));
console.log(altcase('gaJJelli sAINIk'));

