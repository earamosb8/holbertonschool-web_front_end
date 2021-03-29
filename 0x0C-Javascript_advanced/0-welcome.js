/*Create a function named welcome:
It takes two arguments: firstName (string) and lastName (string)
It contains a variable named fullName, that will contains the firstName followed by a space and then the lastName
Within the welcome function, write a function named displayFullName:*/

function welcome(firstName, lastName){
    let fullName = `${firstName} ${lastName}`;
    function displayFullName(){
        alert(`Welcome ${fullName}!`);
    }
    displayFullName();
}
