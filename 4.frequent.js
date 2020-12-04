var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var most = 1;
var p = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 p++;
                if (most<p)
                {
                  most=p; 
                  item = arr1[i];
                }
        }
        p=0;
}
document.write("<br/><h1>Most frequent item :</h1>"+ item+" ( " +most +" times ) ") ;
