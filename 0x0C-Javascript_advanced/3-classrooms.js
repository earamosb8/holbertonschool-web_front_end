/*Write a function named createClassRoom:
It takes into argument numbersOfStudents (number)
Inside, it contains a function studentSeat, that takes into argument seat (number) and returns a function that returns the seat number
After the definition of studentSeat, create and populate a variable students (array)*/

function createClassRoom(numbersOfStudents){
    function studentSeat(seat){
        return function(){
            return seat;
        }
    }

    let students = [];
    for(let i = 0; i < numbersOfStudents; i++){
        students.push(studentSeat(i + 1));
    }
    return students;
}
let classRoom = createClassRoom(10);
