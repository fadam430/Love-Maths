document.addEventListener("DOMContentLoaded", function(  ){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked a submit!")
            } else{
                let gameType = this.getAttribute("data-type");
                alert(`You licked ${gameType}.`)
            }
        })
    }
})

/**
 * The main game "loop" called when the script first loaded
 * and after the user's answer has been loaded
 */

function runGame() {
    // two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion() {
    
}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion() {
    
}

function displayDividedQuestion() {
    
}