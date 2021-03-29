//changue the window atributes
function changeMode(size, weight, transform, background, color) {
    return function(){
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main(){
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12,'bold', 'capitalize', 'black','white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    //create paragraph
    let paragraph = document.createElement("p");
    let textNode = document.createTextNode("Welcome Holberton!");
    paragraph.appendChild(textNode);
    document.body.appendChild(paragraph);


    //create spookyButton
    let spookyButton = document.createElement('button');
    spookyButton.innerHTML = 'Spooky';
    spookyButton.onclick = function(){
        spooky();
    }
    document.body.appendChild(spookyButton);

    //create darkButton
    let darkButton = document.createElement('button');
    darkButton.innerHTML = 'Dark Mode';
    darkButton.onclick = function(){
        darkMode();
    }
    document.body.appendChild(darkButton);

    //create screamButton
    let screamButton = document.createElement('button');
    screamButton.innerHTML = 'Scream Mode';
    screamButton.onclick = function(){
        screamMode();
    }
    document.body.appendChild(screamButton);
}
window.onload = main();