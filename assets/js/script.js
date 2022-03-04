//wait for the dom to finish loading before running the game
//get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");


    // Iterates through buttons to establishe which game type the user has clicked
    // Is this case "this" refers to whatever button was just clicked, then calls "get attribute" function/method

    for (let button of buttons) {                       // more modern version of ----> for (let i = 0; i < buttons.length; i++)  
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {         //narrows down what was clicked, theres is only 1 submit
                alert("You clicked Submit"); 
            } else {
                let gameType = this.getAttribute("data-type");      
                alert(`You clicked ${gameType}`);                    //but there are 4 game type each with their own gameType/dataType
            }                                                        //DON'T FORGOT TEMPLATE LITERAL BACK TICKS!!!!
     })
  }
})

/**
 * the main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    //generate two random whole numbers rounded down to the nearest integer
    let num1 = Math.floor(Math.random() * 25) + 1;   // +1 stops the rounding down process for excluding 24
    let num2 = Math.floor(Math.random() * 25) + 1;
}


function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayAdditionQuestion() {
    
}

