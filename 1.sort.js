
window.alert("Sorting numbers: 0 , -1 , 4")
var x= 0;
var y=-1;
var z= 4;
if (x>y && x>z)
{
        if (y>z)
        {
            document.write(x + ", " + y + ", " +z);
        }
        else
        {
            document.write(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             document.write(y + ", " + x + ", " +z);
        }
        else
        {
             document.write(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            document.write("<h1>After sorting : </h1>"+ z + ", " + x + ", " +y);
        }
        else
        {
            document.write("<h1>After sorting : </h1>"+ z + ", " + y + ", " +x);
        }
}