document.addEventListener("DOMContentLoaded", function(  ){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit"){
                checkAnswer()
            } else{
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/**
 * The main game "loop" called when the script first loaded
 * and after the user's answer has been loaded
 */

function runGame(gameType) {
    // two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else {
        alert(`Unknown game type: ${gameType}.`);
        throw (`Unknown game type: ${gameType} : Aborting!`);
    }
}

/**
 * check the answer against the first element in 
 * the returned calculateCorrectAnswer array 
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculateAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculateAnswer[0];

    if (isCorrect) {
        alert("You get it right!");
        incrementScore()
    } else {
        alert(`Awwwwwwwwww............... Your answer was ${userAnswer}. The correct answer is ${calculateAnswer[0]}`);
        incrementWrongAnswer()
    }

    runGame(calculateAnswer[1]);
}
/**
 * gets the operand (numbers) and operator (plus. minus ...)
 * directly from the DOM, and returns a correct answer 
 */
function calculateCorrectAnswer(){

    let operand1 = parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operand = document.getElementById("operator").innerText;

    if(operand === "+") {
        return [operand1 + operand2 , "addition"]
    } else {
        alert(`Unimplemented operator ${operand} `);
        throw `Unimplemented operator ${operand}. Aborting! `;
    }
}
/**
 * Get the current score for DOM and increment + 1
 */
function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore
}
/**
 * Get the current incorrect score for DOM and increment + 1
 */
function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion() {
    
}

function displayDividedQuestion() {
    
}