let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
let clickSound = new Audio('Zero.wav');
let congrats = new Audio('Congrats.wav');
let GameOver = new Audio('GameOver.wav');

//computer choice
const genCompChoice=()=>{
    const options=["rock","paper","scissors"]; 
    const ranIdx=Math.floor(Math.random()*3);//In Math class we have random method that will generate random value from [0 to 1] and by multiply by 3 range become(0 to 2)
     //rock,scissors,paper
    return options[ranIdx];
}
const drawGame= ()=>{
    //console.log("Game was Draw.");
    GameOver.play();
    msg.innerText="Game was Draw.Play Again!";
    msg.style.backgroundColor="yellow";
}
const showWinner= (userWin,userChoice,compChoice)=>{
     if(userWin){
        congrats.play();
        userscore++
        userScorePara.innerText=userscore;
        //console.log("You win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
     }
     else{
        //console.log("You Lost");
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
     }
}
const playGame = (userChoice)=>{
    // console.log("User Choice = ",userChoice);
     //Generate computer Choice->modular way of programming
     const compChoice=genCompChoice();
    // console.log("Computer Choice = ",compChoice);
     if(userChoice==compChoice)
     {   //Draw Game
        drawGame();
     }
     else {
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissors,paper
            userWin=compChoice ==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            //rock,scissors
            userWin=compChoice ==="scissors"?false:true;
        }
        else{
            //paper,rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
     }
}

//userchoice
choices.forEach((choice)=>{
    //console.log(choice);//get indivisual div
    choice.addEventListener("click",()=>{
        clickSound.play();
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});