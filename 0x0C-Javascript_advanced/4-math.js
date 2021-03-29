/*It takes into argument firstNumber (number)
It returns a function that takes into argument secondNumber (number)
It returns the second number divided by the first number*/
function divideBy(firstNumber){
    return function(secondNumber){
        return secondNumber / firstNumber;
    }
}

/*It takes into argument firstNumber (number)
It returns a function that takes into argument secondNumber (number)
It returns the sum of the two numbers*/
function addBy(firstNumber){
    return function(secondNumber){
        return secondNumber + firstNumber;
    }
}

//four closures:
let addBy100 = addBy(100);
let addBy1000 = addBy(1000);
let divideBy10 = divideBy(10);
let divideBy100 = divideBy(100);