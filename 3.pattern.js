var x,y,i;
document.write("<h1>Pattern</h1>");
for(x=1;x<=5;x++)
{
    for(y=5;y>=x;y--)
    {
    document.write("*");
    }
    document.write("<br/>");
}