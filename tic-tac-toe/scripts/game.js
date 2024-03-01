function resetGame(){
    activePLayer =0;
    currentRound =1;
     gameIsOver = false;

    gameOver.firstElementChild.innerHTML = ' <h2>you won <span id="winner-name">PLAYER NAME</span>!</h3>';
    gameOver.style.display ='none';

    let gameboardIndex = 0;
    for(let i =0;i<3;i++){
    for(let j =0;j<3;j++){
        gameData[i][j]=0;

        const gameBoardItemsElement =gameBoardElement.children[gameboardIndex];
        gameBoardItemsElement.textContent="";
        gameBoardItemsElement.classList.remove('disabled')//li styles removed
        gameboardIndex++
    }
}
}

function startGame(){
    if(players[0].name == "" || players[1].name == ""){
        alert("please enter a custom name to continue" );
        return;
    }
    resetGame();
    gameSection.style.display ='block'
    playerNameElement.innerHTML = players[activePLayer].name;
}

 function switchPlayer(){
     if(activePLayer===0){
         activePLayer=1;
        }else{
            activePLayer=0;
        }
        playerNameElement.innerHTML = players[activePLayer].name; //active player will give us index which helps us to get the players details in araay acc to index
 }
 function selectGameField(event){   
    if(gameIsOver) {
        return;
    }
    
    const selectedRow = event.target.dataset.row-1
    const selectedColoumn = event.target.dataset.col-1;

if(gameData[selectedRow][selectedColoumn] >0){
    alert("you must select an empty space")
    return;
}

    event.target.textContent = players[activePLayer].symbol;
    event.target.classList.add('disabled')

    gameData[selectedRow][selectedColoumn] = activePLayer+1

     let winnerid = checkForGameOver();
     console.log(winnerid)

     if(winnerid!==0){
         endGame(winnerid)
     }

     currentRound++
    switchPlayer();
}



function checkForGameOver(){

// checking for rows ,ex - [X X X]
for(i=0;i<3;i++){    
    if(gameData[i][0]>0&& 
       gameData[i][0] == gameData[i][1]&&
       gameData[i][1]== gameData[i][2]){

        return gameData[i][0]
    }
}
//checking for coloumns
for(i=0;i<3;i++){    
    if(gameData[0][i]>0&& 
       gameData[0][i] == gameData[1][i]&&
       gameData[1][i]== gameData[2][i]){

        return gameData[0][i]
    }
}

// checking for diagonals lefy to right , ex [X O  O]
                                         //  [O X O]
                                         //  [O O X]
if(gameData[0][0]>0 &&
   gameData[0][0]==gameData[1][1]&&
   gameData[1][1]==gameData[2][2]){

    return gameData[0][0];
}
  
// checking for diagonals right to left


if(gameData[0][2] > 0 &&
   gameData[0][2]===gameData[1][1]&&
   gameData[1][1]===gameData[2][0]){

    return gameData[0][2];
}; 


if(currentRound===9){
    return -1;
}
return 0;


}
function endGame(winnerid){
    gameIsOver = true;
    gameOver.style.display='block'

    if(winnerid>0){
     winnerNameElement.textContent = players[winnerid-1].name;
    }else{
        gameOver.firstElementChild.textContent= "it\'s a draw!";
        
    }
}