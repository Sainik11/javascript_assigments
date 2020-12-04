function getSize()
{
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wid-hyt').innerHTML = "<h1>Width: " + width + " and Height: " + height + "</h1>";
}