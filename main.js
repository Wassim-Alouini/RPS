let log = "";
let playerchoice = 0;
let choice = 0;
function setToRock(){
    if (playerchoice == 0){
        playerchoice = 1
    }
    
}
function setToScissors(){
    if (playerchoice == 0){
        playerchoice = 3
    }
}
function setToPaper(){
    if (playerchoice == 0){
        playerchoice = 2
    }
}
function match(){
    let choice = Math.floor(Math.random()* 3)
    choice = choice + 1 ;
    if (choice == 1){document.getElementById("dis").style.setProperty("background-image", "url('https://i.ibb.co/PmWD7W6/Paper.png')")}
    else if (choice ==2){document.getElementById("dis").style.backgroundImage = "url('https://i.ibb.co/PmWD7W6/Paper.png')"}
    else if (choice == 3){document.getElementById("dis").style.backgroundImage = "url('https://i.ibb.co/tL6HXW5/Scissors.png')"}
    
    console.log(log);
    setTimeout(function(){
        if (playerchoice == choice){
            document.getElementById("result").style.color = 'yellow'
            document.getElementById("result").style.fontSize = '4em'
            document.getElementById("result").style.fontWeight = 'bold'
            document.getElementById("result").innerHTML = "Draw"
        }
        else if ((playerchoice == 1 && choice == 2) || (playerchoice == 2 && choice == 3) || (playerchoice == 3 && choice == 1)){
            document.getElementById("result").style.color = 'red'
            document.getElementById("result").style.fontSize = '4em'
            document.getElementById("result").style.fontWeight = 'bold'
            document.getElementById("result").innerHTML = "Lose"
        }
        else {
            document.getElementById("result").style.color = 'green'
            document.getElementById("result").style.fontSize = '4em'
            document.getElementById("result").style.fontWeight = 'bold'
            document.getElementById("result").innerHTML = "Win"
        }
    }, 300)

}
function reload(){
    setTimeout(function(){window.location.reload()} , 850)
}
function disable(){
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}
