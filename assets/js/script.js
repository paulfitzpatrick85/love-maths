//wait for the dom to finish loading before running the game
//get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");


    // Iterates through buttons to establishe which game type the user has clicked
    // Is this case "this" refers to whatever button was just clicked, then calls "get attribute" function/method

    for (let button of buttons) {                       // more modern version of ----> for (let i = 0; i < buttons.length; i++)  
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {         //narrows down what was clicked, theres is only 1 submit
                alert("You clicked Submit!"); 
            } else {
                let gameType = this.getAttribute("data-type");      
                runGame(gameType);                  
            }                                                        //but there are 4 game type each with their own gameType/dataType
     });
  }
  runGame("addition");                                      // sets default game, runs as soon as the DOM is loaded

});

/**
 * the main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {             // pass gametype into function as argument
    
    let num1 = Math.floor(Math.random() * 25) + 1;    //generate two random whole numbers rounded down to the nearest integer
    let num2 = Math.floor(Math.random() * 25) + 1;    // +1 stops the rounding down process for excluding 24
    
    if (gameType === "addition") {                      //check game type parameter
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;    //stop game from running and print message to console for debugging
    }
}


function checkAnswer() {
 operand1
}
/**
 * gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer
 */
//read values from the dom and store them in variables
function calculateCorrectAnswer() {
    //parseInt returns value from dom as number instead of string
    let operand1 = parseInt(document.getElementById('operand1').innerText);  //get value of operand1 from html
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;
    //determine game type by operator

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting`;
    }


}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;  //sets text content to num 1 from rungame if block
    document.getElementById('operand2').textContent = operand2;  //sets text content to num 2 from rungame if block
    document.getElementById('operator').textContent = "+";
}


function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}
