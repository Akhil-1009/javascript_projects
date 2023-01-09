var boxes=$(".grid-item");
var reset=$("button");
console.log(boxes);
var header=$("#header");
   
var board=['','','','','','','','',''];
var currentplayer='X';
var isgameactive=true;
const playerx_won='playerX';
const playero_won='playerO';

var wincomb=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];

(function(){
    header.append('<p> player <span class="playerX">'+currentplayer+'</span>s turn</p>');
     
})();

function validaction(box)
{
    if(box.textContent=='X'||box.textContent=='O')
    {
        return false;
    }
    else{
        return true;
    }
}
function handleresult(){
    let roundwon=false;
    console.log(board);
    for(let i=0;i<=7;i++)
    {   let temp=wincomb[i];
        let a=board[temp[0]];
        let b=board[temp[1]];
        let c=board[temp[2]];
        console.log(a+" "+b,c);
        if(a===''||b===''||c==='')
        {
            continue;
        }
        if(a===b&&b===c)
        {
            roundwon=true;
            break;
        }
    }
    if(roundwon)
    {    isgameactive=false;
        announcer(currentplayer=='X'?playerx_won:playero_won);
        return;
    }
    if(!board.includes(''))
    {
        isgameactive=false;
        announcer('TIE');
        return;
    }
}
function announcer(winner)
{   console.log('this')
    if(winner==playerx_won)
    {     console.log("ye isme");
             $("#bottom").append('<p class="lastp"> player <span class="playerX">X</span> won');
    }
    else if(winner==playero_won)
    {
        $("#bottom").append('<p id="lastp"> player <span class="playerO">O</span> won');
         
    }
    else{
        $("#bottom").append('<p id="lastp"> TIE</p>');
        
    }
    // $("#announce").classList.remove('hide');
}
function changeplayer(){
    if(currentplayer=='X')
    {

        currentplayer='O';
        $("#header p").remove();
        header.append('<p> player <span class="playerO">'+currentplayer+'</span>s turn</p>');
    }
    else{
        currentplayer='X';
        $("#header p").remove();

        header.append('<p> player <span class="playerX">'+currentplayer+'</span>s turn</p>');
    }

}
for(let i=0;i<boxes.length;i++)
{     
    boxes[i].addEventListener('click',function(){
        console.log(i);
        if(isgameactive && validaction(boxes[i]))
        {    
            boxes[i].textContent=currentplayer;
            if(currentplayer=='X')
            {
                boxes[i].classList.add('playerX');
            }
            else{
                boxes[i].classList.add('playerO');

            }
            board[i]=currentplayer;
            handleresult();
            changeplayer();
        }
    });
}
reset[0].addEventListener('click',function(){
    for(let i=0;i<boxes.length;i++)
    {
        boxes[i].textContent="";
    }
    isgameactive=true;
});