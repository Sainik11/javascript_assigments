// var s="hi from skillsanta";
// function capitilize_Words(s){
//     return s.charAt(0).toUppercase()+ s.slice(1);
// }
// console.log(capitilize_Words('hi from skillsanta'));




function capitalize(s){
    return s.toLowerCase().replace( /\b./g, 
        function(a){ 
            return a.toUpperCase(); 
        } );
};

document.write(capitalize('hi from skilsanta'));