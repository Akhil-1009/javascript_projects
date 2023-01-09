var ball=document.getElementById('ball');
var rod1=document.getElementById('rod1');
var rod2=document.getElementById('rod2');

// starting the game
const storeName="PPName";
const playerName1="player1";
const playerName2="player2";
const storeScore="score";
let score1,
 score2,
 maxScore,
 rod,
 ballSpeedX=2,
 ballSpeedY=2,
 movement;
let gameOn=false;
let windowWidth=window.innerWidth;
let windowHeight=window.innerHeight;

(function(){
     maxScore=localStorage.getItem(storeScore);
     rod=localStorage.getItem(storeName);
     if(rod==="null"||maxScore==="null")
     {
        alert("This is your first time to play this game!! LET'S START");
        maxScore=0;
        rod="player1";
     }
     else{
        alert(rod+" has maximum score of "+maxScore*100);

     }
     resetBoard(rod);
     
})();

function resetBoard(rodName){
    
rod1.style.left=(window.innerWidth - rod1.offsetWidth)/2+"px"; 
     rod2.style.left=(window.innerWidth-rod2.offsetWidth)/2+"px";
     ball.style.left=(window.innerWidth-ball.offsetWidth)/2+"px";
     

    if(rodName===playerName2){
        ball.style.top=(rod1.offsetHeight)+"px";
        ballSpeedY=2;
     }
    else if(rodName===playerName1)
     {
        ball.style.top=(windowHeight-2*rod2.offsetHeight)+"px";
        ballSpeedY=-2;
        console.log("we have set it to -2");
     }
    
        score1=0;
        score2=0;
        gameOn=false;
    
}
function storeWin(rod,finalScore){
    console.log("we are in clear interval");
    if(finalScore>maxScore){
        maxScore=finalScore;
        localStorage.setItem(storeScore,maxScore);
        localStorage.setItem(storeName,rod);

    }
    clearInterval(movement);
    resetBoard(rod);
    alert(rod+"wins with a score of "+(finalScore*100)+" max score is "+(100*maxScore));
    
}

window.addEventListener('keypress',function(event){
    let rodSpeed=20;
    let rodRect=rod1.getBoundingClientRect();
    if(event.key==='A' && (rodRect.x > 0) ){
        rod1.style.left=((rodRect.x)-rodSpeed)+"px";
        rod2.style.left=rod1.style.left;
    }
    else if(event.key==='D' && ((rodRect.x+rodRect.width)<window.innerWidth))
    {
        rod1.style.left=((rodRect.x)+rodSpeed)+"px";
        rod2.style.left=rod1.style.left;
    }

    if(event.code==="Enter")
    {
        if(!gameOn){
            gameOn=true;
            let ballRect=ball.getBoundingClientRect();
            let ballX=ballRect.x;
            let ballY=ballRect.y;
            console.log(ballY);

            let rod1Width=rod1.offsetWidth;
            let rod1Height=rod1.offsetHeight;
            let rod2Width=rod2.offsetWidth;
            let rod2Height=rod2.offsetHeight;
            let ballDia=ballRect.width;
              
            // MOVING THE BALL !!!

            movement=setInterval(function(){
                console.log(ballY+"px");
                
                ballX +=ballSpeedX;
                ballY +=ballSpeedY;
                console.log(ballY+"px");
                
                ball.style.left=ballX + "px";
               ball.style.top=ballY + 'px';

              let  rod1X = rod1.getBoundingClientRect().x;
              let  rod2X = rod2.getBoundingClientRect().x;
                console.log(ballY+"px");
                if((ballX + ballDia)>windowWidth || ballX<0)
                {
                    ballSpeedX=-ballSpeedX;
                }
              let ballPos=ballX+ballDia/2;
               
              // check for rod1;
               
               if(ballY<=(rod1Height)){
                ballSpeedY=-ballSpeedY;
                score1++;

                if((ballPos < rod1X)|| (ballPos > (rod1X+rod1Width)) )
                {
                    storeWin(playerName2,score2);
                }

               }
                
               // check for rod2
               if((ballY+ballDia) >= (window.innerHeight-(rod2Height)))
               {    ballSpeedY=-ballSpeedY; 
                    score2++;

                    if((ballPos < rod2X)|| (ballPos > (rod2X+rod2Width)) ){
                        storeWin(playerName1,score1);
                    }
               }
               console.log(ballY+"px");


            },10);
        }
    }
 } );

  // now second code  

//   var ball = document.getElementById('ball');
// var rod1 = document.getElementById('rod1');
// var rod2 = document.getElementById('rod2');


// const storeName = "PPName";
// const storeScore = "PPMaxScore";
// const rod1Name = "Rod 1";
// const rod2Name = "Rod 2";


// let score,
//     maxScore,
//     movement,
//     rod,
//     ballSpeedX = 2,
//     ballSpeedY = 2;

// let gameOn = false;

// let windowWidth = window.innerWidth,
//     windowHeight = window.innerHeight;



// (function () {
//     rod = localStorage.getItem(storeName);
//     maxScore = localStorage.getItem(storeScore);

//     if (rod === "null" || maxScore === "null") {
//         alert("This is the first time you are playing this game. LET'S START");
//         maxScore = 0;
//         rod = "Rod1"
//     } else {
//         alert(rod + " has maximum score of " + maxScore * 100);
//     }

//     resetBoard(rod);
// })();



// function resetBoard(rodName) {

//     rod1.style.left = (window.innerWidth - rod1.offsetWidth) / 2 + 'px';
//     rod2.style.left = (window.innerWidth - rod2.offsetWidth) / 2 + 'px';
//     ball.style.left = (windowWidth - ball.offsetWidth) / 2 + 'px';


//     // Lossing player gets the ball
//     if (rodName === rod2Name) {
//         ball.style.top = (rod1.offsetTop + rod1.offsetHeight) + 'px';
//         ballSpeedY = 2;
//     } else if (rodName === rod1Name) {
//         ball.style.top = (rod2.offsetTop - rod2.offsetHeight) + 'px';
//         ballSpeedY = -2;
//     }

//     score = 0;
//     gameOn = false;

// }



// function storeWin(rod, score) {

//     if (score > maxScore) {
//         maxScore = score;
//         localStorage.setItem(storeName, rod);
//         localStorage.setItem(storeScore, maxScore);
//     }

//     clearInterval(movement);
//     resetBoard(rod);

//     alert(rod + " wins with a score of " + (score * 100) + ". Max score is: " + (maxScore * 100));

// }



// window.addEventListener('keypress', function () {
//     let rodSpeed = 20;

//     let rodRect = rod1.getBoundingClientRect();


//     if (event.code === "KeyD" && ((rodRect.x + rodRect.width) < window.innerWidth)) {
//         rod1.style.left = (rodRect.x) + rodSpeed + 'px';
//         rod2.style.left = rod1.style.left;
//     } else if (event.code === "KeyA" && (rodRect.x > 0)) {
//         rod1.style.left = (rodRect.x) - rodSpeed + 'px';
//         rod2.style.left = rod1.style.left;
//     }


//     if (event.code === "Enter") {

//         if (!gameOn) {
//             gameOn = true;
//             let ballRect = ball.getBoundingClientRect();
//             let ballX = ballRect.x;
//             let ballY = ballRect.y;
//             let ballDia = ballRect.width;

//             let rod1Height = rod1.offsetHeight;
//             let rod2Height = rod2.offsetHeight;
//             let rod1Width = rod1.offsetWidth;
//             let rod2Width = rod2.offsetWidth;


//             movement = setInterval(function () {
//                 // Move ball 
//                 ballX += ballSpeedX;
//                 ballY += ballSpeedY;

//                 rod1X = rod1.getBoundingClientRect().x;
//                 rod2X = rod2.getBoundingClientRect().x;

//                 ball.style.left = ballX + 'px';
//                 ball.style.top = ballY + 'px';


//                 if ((ballX + ballDia) > windowWidth || ballX < 0) {
//                     ballSpeedX = -ballSpeedX; // Reverses the direction
//                 }

//                 // It specifies the center of the ball on the viewport
//                 let ballPos = ballX + ballDia / 2;

//                 // Check for Rod 1
//                 if (ballY <= rod1Height) {
//                     ballSpeedY = -ballSpeedY; // Reverses the direction
//                     score++;

//                     // Check if the game ends
//                     if ((ballPos < rod1X) || (ballPos > (rod1X + rod1Width))) {
//                         storeWin(rod2Name, score);
//                     }
//                 }

//                 // Check for Rod 2
//                 else if ((ballY + ballDia) >= (windowHeight - rod2Height)) {
//                     ballSpeedY = -ballSpeedY; // Reverses the direction
//                     score++;

//                     // Check if the game ends
//                     if ((ballPos < rod2X) || (ballPos > (rod2X + rod2Width))) {
//                         storeWin(rod1Name, score);
//                     }
//                 }

//             }, 10);

//         }
//     }

// });
