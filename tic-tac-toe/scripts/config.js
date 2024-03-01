function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    playeronfig.style.display ='block'
    backdrop.style.display ='block'
}
function closePlayerConfig(){
   playeronfig.style.display ='none'
   backdrop.style.display ='none'
   errorClass.classList.remove('error')
   warnElement.textContent = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPLayerName = formData.get('playername').trim();
    
    if(!enteredPLayerName) {//enteredplayername == ""(empty string);
       warnElement.textContent = 'please enter a valid name!';
       errorClass.classList.add('error')
       return;
    }
    let updatedPlayerName = document.getElementById('player-'+editedPlayer+'-data'); 
    updatedPlayerName.children[1].textContent = enteredPLayerName;
    console.log(enteredPLayerName)
    console.log(editedPlayer)


    players[editedPlayer-1].name = enteredPLayerName;
    closePlayerConfig();
}
