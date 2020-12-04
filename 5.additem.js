var x = 0;
var arr = Array();

function add()
{
 arr[x] = document.getElementById("text").value;
 alert("Element: " + arr[x] + " Added at index " + x);
 x++;
 document.getElementById("text").value = "";
}

function display()
{
   var a = "<hr/>";   
    
   for (var y=0; y<arr.length; y++)
   {
     a += "Element " + y + " = " + arr[y] + "<br/>";
   }
   document.getElementById("Output").innerHTML = a;
}
