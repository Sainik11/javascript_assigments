hide = function (usermail)
{
    var avg,split,p1,p2;
    split = usermail.split("@");
    p1=split[0];
    avg=p1.length/2;
    p1=p1.substring(0,(p1.length-avg));
    p2 =split[1];
    return p1+"...@"+p2;
};
document.write("<h1>Hide mail</h1>")
document.write(hide("eddygrant@example.com"));