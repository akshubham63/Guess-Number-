const cl = console.log;

let computerGuess;//declare because we want this in the init function 
let userGuess = [];// use for to store the user guess value from input
const gameSection = document.getElementById("gameSection");
const newGame = document.getElementById("newGame");
const onHardBtn = document.getElementById("onHardBtn");
const onEasyBtn = document.getElementById("onEasyBtn");
const welcomeSection = document.getElementById("welcomeSection");
const inputBox = document.getElementById("inputBox");
const previousGess = document.getElementById("previousGess");
const attemps = document.getElementById("attemps");
const textOutput = document.getElementById("textOutput");

// function for to get the random number guess
const init = () => {
    computerGuess = Math.trunc(Math.random() * 101);
    gameSection.classList.add("d-none");
    newGame.classList.add("d-none");
};

const startGame = () => {
    gameSection.classList.remove("d-none");
    welcomeSection.classList.add("d-none");
};

const onEasyMode = (ele) => {
    maxCount = 10;
    startGame();
};

const onHardMode = (ele) => {
    maxCount = 5;
    startGame();
};

const startNewGame = (ele) => {
    newGame.classList.remove("d-none");
    inputBox.setAttribute("disabled",true);
};

const onNewGame = (eve) => {
    window.location.reload();
};

const inputHandler = (eve) => {
    const userNumber = Number(eve.value);
    userGuess = [...userGuess, userNumber];
    previousGess.innerText = userGuess;

    // check the value is low or high
    if(userGuess.length < maxCount){
        if(userNumber > computerGuess){
        textOutput.innerText = `your guess is too high 😨`;
        eve.value = '';
        }else if(userNumber < computerGuess){
        textOutput.innerText = `your guess is too low🙁`;
        eve.value = '';
        }else{
        textOutput.innerText = `It's correct 🎉🎉🎊🎊👏👏`;
        eve.value = '';
        startNewGame();
        };
    }else{
        if(userNumber > computerGuess){
            textOutput.innerText = `you loose!! 🙁 value is ${computerGuess}`;
            eve.value = '';
            startNewGame();
            }else if(userNumber < computerGuess){
            textOutput.innerText = `you loose!! 🙁 value is ${computerGuess}`;
            eve.value = '';
            startNewGame();
            }else{
            textOutput.innerText = `It's correct 🎉🎉🎊🎊👏👏`;
            eve.value = '';
            startNewGame();
            };
    };
    attemps.innerText = userGuess.length;
};

// event 
onHardBtn.addEventListener("click",onHardMode);
onEasyBtn.addEventListener("click",onEasyMode);
newGame.addEventListener("click",onNewGame);