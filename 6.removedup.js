function id(array){
    var uArr = [];
    
    for(var value of array){
        if(uArr.indexOf(value) === -1){
            uArr.push(value);
        }
    }
    return uArr;
}
document.write("<br><h1>Remove duplicates</h1>");
var names = ["MI","RCB","RR","KX11P", "MI", "DC", "CSK", "SRH", "MI"];
var uNames = id(names);
document.write(uNames );