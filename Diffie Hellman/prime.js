//This function returns if the entered number is prime number
 function isPrime (a){
   for(let index = 2; index < a; index ++)
    if(a % index ==0)
        return false;
    return true;
}
//This function return the pgcd of two numbers 
 function pgcd(a,b){
    if(a == b)
        return a;
    if( a > b)
       return pgcd (a-b,b);
    if(b > a )
       return pgcd (a,b-a);
}

exports.pgcd = pgcd;
exports.isPrime = isPrime;