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

    document.getElementById("answer-box").addEventListener('keydown', function(event){
        if (event.key === "Enter") {
            checkAnswer()
        }
    })

    runGame("addition");
})

/**
 * The main game "loop" called when the script first loaded
 * and after the user's answer has been loaded
 */

function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else if(gameType === "multiply") {
        displayMultiplyQuestion(num1,num2);
    } else if (gameType === "subtract") {
        displaySubtractionQuestion(num1,num2);
    }else if(gameType === "division"){
        displayDividedQuestion(num1,num2)
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
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return [operand1 + operand2 , "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2 , "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2 , "subtract"];
    } else if (operator === "/"){
        return [operand1 / operand2, "division"];
    }
    else {
        alert(`Unimplemented operator ${operator} `);
        throw `Unimplemented operator ${operator}. Aborting! `;
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

function displaySubtractionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDividedQuestion(operand1, operand2) {

    operand1 = operand1 * operand2
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "/";
    
}