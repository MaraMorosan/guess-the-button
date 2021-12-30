var chosenButton;

//this function chooses a random number from 1 to 3 and creates the 3 buttons from which the user needs to choose (button 1 = 1, button 2 = 2, button 3 = 3)

function chooseRandomBtn() {
    chosenButton = Math.floor(Math.random() * 3) + 1;
    for(let i = 1; i <= 3; i++){
        $('#buttons').append(`
            <button type="button" id = "` + i + `" class="btn btn-primary" onclick = "return guessedBtn(` + i + `);">Button: ` + i + `</button>
        `);
    }
}

//this function is checking if the button that was clicked by the user is the one that was chosen by the 

function guessedBtn(id) {
    if(id == chosenButton) {
    document.getElementById("check").style.color = "green";
    document.getElementById("check").innerHTML = "Check: You won!";
  }
  else{
      document.getElementById("check").style.color = "red";
    document.getElementById("check").innerHTML = "Check: You lost!";
  }
}

function restart() {
  location.reload();
}