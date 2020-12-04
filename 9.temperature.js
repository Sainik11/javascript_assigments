function c2F(celsius) 
{
  var cTemp = celsius;
  var ctoFahr = cTemp * 9 / 5 + 32;
  var message = '<h3>Coverting Celsius to Fahrenhiet :</h3>'+ cTemp+'\xB0C is ' + ctoFahr + ' \xB0F.';
    document.write(message);
}

function f2C(fahrenheit) 
{
  var fTemp = fahrenheit;
  var ftoCel = (fTemp - 32) * 5 / 9;
  var message = '<h3>Coverting Fahrenhiet to Celsius :</h3>'+ fTemp+'\xB0F is ' + ftoCel + '\xB0C.';
    document.write(message);
} 
c2F(20);
f2C(20);
