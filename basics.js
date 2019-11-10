// Updates name on HTML
const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName() {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

// adds element to HTML 
function createParagraph() {
    let para1 = document.createElement('p');
    para1.textContent = 'You clicked the button!';
    document.body.appendChild(para1);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
}

//Exceptions --> throw when id < 0
function getPersons(ids) {
    var result = [];
    ids.forEach(function (id) {
        try {
            var person = getPerson(id);
            result.push(person);
        } catch (exception) {
            console.log(exception);
        }
    });
    return result;
}

getPersons([2,-5]);

// print triangle in console log
function triangle(len) {
    for(let line = "#"; line.length <= len; line += "#"){
        console.log(line);
    }
}

//fizzbuzz
function fizzbuzz() {
    for(let i = 1; i <= 100; i++) {
        let result = "";
        if(i % 3 === 0) result += "fizz";
        if(i % 5 === 0) result += "buzz";
        console.log(result || i);
    }
}

//print chessboard to console
function chessboard() {
    let size = 8;
    let board = "";

    for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
        board += " ";
        } else {
        board += "#";
        }
    }
    board += "\n";
    }
    
    console.log(board);
}