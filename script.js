'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector(".message").textContent="Correct Number"
// document.querySelector(".guess").value=23;
// document.querySelector(".number").textContent=10;
let numb=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
document.querySelector(".check").addEventListener("click",function(){
    const check=Number(document.querySelector('.guess').value);
    
    
    if(!check){
        document.querySelector(".message").textContent=" no number"; 
        score=score-1; 
        document.querySelector(".score").textContent=score

    }else{
        if(check===numb){
            document.querySelector(".message").textContent="Correct Number";
            document.querySelector('.number').textContent=numb;
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number').style.width='30rem';
            if(score>highscore){
                highscore=score
                document.querySelector('.highscore').textContent=highscore;
            }


        }else if(check<numb){
            if(score>1){
                document.querySelector(".message").textContent="too less"
            score=score-1; 
        document.querySelector(".score").textContent=score
            }else{
                document.querySelector(".message").textContent=" you lost the game"
                document.querySelector(".score").textContent=0;
            }
            
        }else if(check>numb){
            if(score>1){
                document.querySelector('.message').textContent="too high"
            score=score-1; 
            document.querySelector(".score").textContent=score
            }else{
                document.querySelector(".message").textContent=" you lost the game"
                document.querySelector(".score").textContent=0;
            }
        }
    }
    

    
})

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    numb=Math.trunc(Math.random()*20)+1;
    document.querySelector('.number').textContent=numb;
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width='15rem'; 
  document.querySelector('.number').textContent="?"; 
  document.querySelector('.guess').value=" ";
  document.querySelector('.message').textContent='Start guessing...';
  document.querySelector('.score').textContent=score;

})


