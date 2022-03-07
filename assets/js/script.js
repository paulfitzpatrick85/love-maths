//wait for the dom to finish loading before running the game
//get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");


    // Iterates through buttons to establishe which game type the user has clicked
    // Is this case "this" refers to whatever button was just clicked, then calls "get attribute" function/method

    for (let button of buttons) {        //---------------------- more modern version of ----> for (let i = 0; i < buttons.length; i++)  
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {         //narrows down what was clicked, theres is only 1 submit ///////
                checkAnswer();                                   // set this to an alert starting off to check js is working      //
            } else {                                                                                                                //
                let gameType = this.getAttribute("data-type");                                                                      //
                runGame(gameType);                                // set this to an alert starting off to check js is working       //
            }                                                        //but there are 4 game type each with their own gameType/dataType
     });
  }

  // allow user to use ENTER key to submit answer instead of mouse click
  document.getElementById("answer-box").addEventListener("keydown", function(event) {     //listen for key press
      if (event.key === "Enter") {                                                        //If event(keypress) is enter key, 
          checkAnswer();                                                               //Then run checkAnswer function
      }
  })

  runGame("addition");     // sets default game, runs as soon as the DOM is loaded

});


/**
 * the main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {             // pass gametype into function as argument
    
    document.getElementById("answer-box").value = "";   // set value of answer box to an empty string, so it clears when the runGame function is called after each game 
    document.getElementById("answer-box").focus(); //each time runGame is called, the answer box will gain focus, saving userr from having to clcik into the box manually

    let num1 = Math.floor(Math.random() * 25) + 1;    //generate two random whole numbers rounded down to the nearest integer
    let num2 = Math.floor(Math.random() * 25) + 1;    // +1 stops the rounding down process for excluding 24
    let divisionNum1 = num1 * num2;
    
    if (gameType === "addition") {                      //check game type parameter
        displayAdditionQuestion(num1, num2);             // then go to this function based on above parameter
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division") {
        displayDivisionQuestion(divisionNum1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;    //stop game from running and print message to console for debugging
    }
}


function checkAnswer() {
 let userAnswer = parseInt(document.getElementById("answer-box").value);    //value is used as it is getting a user's input as opposed to .innerText which returns something that was previously set  
 let calculatedAnswer = calculateCorrectAnswer();               //  calculateCorrectAnswer is the correct answer, it is then stored in calculatedAnwser to be used
 let isCorrect = userAnswer === calculatedAnswer[0];     //index is used because, in consoled example, a array is returned [answer, addition(or whatever the game is)]

 if (isCorrect) {
     alert("Hey! You got it right! :D");
     incrementScore();
 } else {
     alert(`Aww....you answeered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
     incrementWrongAnswer();
 }
runGame(calculatedAnswer[1]);      //since calculateCorrectAnswer returns an array and is now set to calculatedAnwser (in function above), the array comes with it, and as in the example the second index was addition
}                                                               


/**
 * gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer
 */
//function to read values from the dom and store them in variables
function calculateCorrectAnswer() {
    //parseInt returns value from dom (in this case the 'innerText' of the operand elements) as a number instead of string
    let operand1 = parseInt(document.getElementById('operand1').innerText);  //gets value of operand1 from html (which is created by the random numner function)
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;
    
    //determine game type by operator   
    if (operator === "+") {
        return [operand1 + operand2, "addition"];       //value returned but displayed in function above when called
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 / operand2, "division"];
     } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting`;
    }


}


/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
     let oldScore = parseInt(document.getElementById("score").innerText); // gets current score
     document.getElementById("score").innerText = ++oldScore;    //Increments 'oldscore' by 1
}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText); // 
     document.getElementById("incorrect").innerText = ++oldScore;    // ++'oldScore and variable oldScore don't have to the same name'

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;  //sets text content to num 1 from rungame if block
    document.getElementById('operand2').textContent = operand2;  //sets text content to num 2 from rungame if block
    document.getElementById('operator').textContent = "+";
}


function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2; //ternary if statement, asks is the operand1 bigger than operand 2, if true returns op1 or else(the ":" part, returns op2)
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1; // if op1 is largest display op2 as second number. ternary if-->  condition? true part : false part
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;  
    document.getElementById('operand2').textContent = operand2;  
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2; //ternary if statement, asks is the operand1 bigger than operand 2, if true returns op1 or else(the ":" part, returns op2)
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1; // if op1 is largest display op2 as second number. ternary if-->  condition? true part : false part
    document.getElementById('operator').textContent = "/";
}
