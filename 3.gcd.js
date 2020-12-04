let gcd = (num1, num2) => {    
    while(num1 != num2){ 
      if(num1 > num2)
      {
        num1 = num1 - num2;
      }
      else
      {
        num2 = num2 - num1;
      }
    }
    return num2;
}
console.info("Few GCD's of two numbers")
console.log(gcd(10, 15));
console.log(gcd(4, 8));
console.log(gcd(12, 30));
console.log(gcd(10, 20 ));