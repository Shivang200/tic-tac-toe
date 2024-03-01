let editedPlayer  = 0;
let activePLayer =0;
let currentRound = 1;
let gameIsOver = false;
const gameData =[
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

const players = [
    {
        name : "",
        symbol : 'X'
    },
    {
        name : "",
        symbol : 'O'
    },
];

const playeronfig = document.getElementById('config')
const backdrop = document.getElementById('backdrop')
const formElement = document.querySelector('form');
const warnElement = document.getElementById('warning')
const errorClass = document.getElementById('error')
const gameSection = document.getElementById('active-game');
const startGameBtn = document.getElementById('start-game-btn')
const gameField =document.querySelectorAll('#game-board li')
let playerNameElement = document.getElementById('active-player-name')
const gameOver = document.getElementById('gameOver')
const gameBoardElement = document.getElementById('game-board')
const winnerNameElement = document.getElementById("winner-name")

const editPlayer1Btn = document.getElementById("edit-player1-btn");
const editPlayer2Btn = document.getElementById("edit-player2-btn");
const cancelConfigBtn = document.getElementById("cancel-config-btn")



editPlayer1Btn.addEventListener('click',openPlayerConfig)
editPlayer2Btn.addEventListener('click',openPlayerConfig)

cancelConfigBtn.addEventListener('click',closePlayerConfig)

formElement.addEventListener('submit',savePlayerConfig)

startGameBtn.addEventListener('click', startGame)

for (const gamefieldElements of gameField) {
    gamefieldElements.addEventListener('click', selectGameField)
    
}