//Write a module named studentHogwarts

let studentHogwarts = function(){
    //It contains two variables privateScore set to 0, and name set to null
    let privateScore = 0;
    let name = null;

    //It contains one private method changeScoreBy, it takes points in argument and add it to privateScore
    function changeScoreBy(points) {
        privateScore += points;
    }
    //The module gives access to four public methods (return an object)
    return {
        setName: function (newName) {
            name = newName;
        },
        rewardStudent: function () {
            changeScoreBy(1);
        },
        penalizeStudent: function () {
            changeScoreBy(-1)
        },
        getScore: function () {
            return name + ': ' + privateScore
        }
    }
};

//Create one variable named harry, that is an instance of studentHogwarts
let harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());


//Create one variable named draco, that is an instance of studentHogwarts:
let draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());

