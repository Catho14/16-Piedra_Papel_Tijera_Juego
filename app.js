//Declaracion de variables
let userScore = 0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div= document.getElementById("r");
const paper_div= document.getElementById("p");
const scissors_div= document.getElementById("s");
//Movimientos de juego de la computadora
function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    
    return choices[randomNumber];
}
//Conversion de la letra a palabra para imprmir en pantalla

function convertToWorld(letter){
    if(letter== "r") return "Rock";
    if(letter== "p") return "Paper";
    return "Scissors";

}
//Funcion de ganador, imprimiendo resultado
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWorld(userChoice)+smallUserWord + " beats "+ convertToWorld( computerChoice) + smallCompWord+". You win! :)";
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow'); },300);
}

//Funcion de perdedor, imprimiendo resultado
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWorld(userChoice)+smallUserWord + " loses to "+ convertToWorld( computerChoice) + smallCompWord+". You loss! :(";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('red-glow'); },300);
}
//Funcion de empate, imprimiendo resultado
function draw(userChoice, computerChoice){
     userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convertToWorld(userChoice)+smallUserWord + " equals "+ convertToWorld( computerChoice) + smallCompWord+". Empate :0";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('gray-glow'); },300);
}

//Funcion del juego: Decide los puntos para poder ganar, perder o empatar
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr": 
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss": 
            draw(userChoice,computerChoice);
            break;
    }
}
//Detecta los clics de cada imagen div
function main(){
rock_div.addEventListener('click', function(){
    game("r");
})

paper_div.addEventListener('click', function(){
    game("p");
})

scissors_div.addEventListener('click', function(){
    game("s");
})
}

main();