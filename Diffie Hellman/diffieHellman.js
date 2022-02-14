/**=========================================================================
 * This code  calculate de secret key using Diffie-Hellman's algorithm
 ===========================================================================*/


 //modules required
    const prompt = require("prompt-sync")();
    const file = require("./prime");
    

 //Variables

    let p = +prompt("Enter the generator number p : ");
    let g = +prompt("Enter the generator number g : ");
    let a = +prompt("Enter Alice's secret number : ");
    let b = +prompt("Enter Bob's secret number : ");

 //This function calculate the secret key S
     function searchS (p,g,a,b){

        if(file.isPrime(p) == false || file.isPrime(g )== false){
            throw new Error ("Please verify that p and g are prime numbers");
        }

        if(file.pgcd(p,g) != 1){
            throw new Error ("Generator numbers must be prime between them");
        }

        if(file.isPrime(p) && file.isPrime(g) && file.pgcd(p,g)== 1){
            return "==========================================\nThe secret key is : " + ((g**a)**b)%p+ "\n==========================================" ;
         }
    }
console.log(searchS(p,g,a,b));

exports.file1 = searchS;