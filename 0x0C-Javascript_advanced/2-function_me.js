/*Write a function named welcomeMessage:
It accepts one argument fullName (string)
It should be a closure for an alert displaying Welcome <fullName>*/

function welcomeMessage(fullName){
    function message(){
        alert(`Welcome ${fullName}`);
    }
    return message;
}
let guillaume = welcomeMessage('guillaume');
let alex = welcomeMessage('alex');
let fred = welcomeMessage('fred');