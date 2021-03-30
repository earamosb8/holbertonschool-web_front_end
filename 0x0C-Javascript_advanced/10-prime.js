/*Write a function named countPrimeNumbers:
It will return the number of prime numbers from 2 to 100
*/
function countPrimeNumbers(){
    let primes = 0;

    for(let i = 2 ; i <= 100; i++) {
        primes += 1;
        let count = 0;
        for(let j = 1; j <= i; j++) {
                if(i % j == 0){
                    count += 1;
                    if(count === 3){
                        primes -= 1;
                        break;
                    }
                    
                }
         }
    }
    return primes;
}

let t0 = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
let t1 = performance.now();
console.log("Execution time of calculating prime numbers 100 times was " + (t1 - t0) + "milliseconds.");