let ranNaum = Math.trunc(Math.random()*20)+1;
//document.querySelector('.number').textContent= ranNaum;
let score = 20; 
console.log(ranNaum); 



document.querySelector('.check').addEventListener('click',function(){
    
    const inputValue= Number(document.querySelector('.guess').value);
    console.log(inputValue)
    
    // When there is no guess
    if (!inputValue){
        document.querySelector('.message').textContent= "No Guessing"
    }

    //When both numbers are equal
    else if (inputValue === ranNaum){
        document.querySelector('.message').textContent= "Correct Number!!" 
        document.querySelector('.score').textContent= score;
        document.querySelector('body').style.backgroundColor= '#60b347';
        document.querySelector('.number').style.width= '30rem';
        document.querySelector('.number').textContent=  inputValue;
        document.querySelector('.highscore').textContent= score;

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent= highscore;
        }
        else if (score<highscore){
            document.querySelector('.highscore').textContent= score;
        }
    }

    //When guess number is lower than random number
    else if (inputValue < ranNaum){
        if(score>1){
            document.querySelector('.message').textContent= "Guess Number is lower than expected";
            score--;
            document.querySelector('.score').textContent= score;
        }
        else{
            document.querySelector('.message').textContent= "You lost the game";
        }
       
    }

    //When guess number is higher than random number
    else if (inputValue > ranNaum){
        if(score>1){
            document.querySelector('.message').textContent= "Guess Number is Higher than expected";
            score--;
            document.querySelector('.score').textContent= score;
        }
        else{
            document.querySelector('.message').textContent= "You lost the game";
        }
       
    }
    else {
        console.log('Nothing'); 
    }
})


document.querySelector('.again').addEventListener('click',function(){
    ranNaum = Math.trunc(Math.random()*20)+1;
    console.log(ranNaum);
    document.querySelector('.number').textContent= ranNaum; 
    score = 20; 

    document.querySelector('body').style.backgroundColor= '#555555';
    document.querySelector('.number').style.width= '15rem';
    document.querySelector('.number').textContent= '?';
    document.querySelector('.message').textContent="Start Guessing"; 
    document.querySelector('.score').textContent=score; 
    document.querySelector('.guess').textContent= ' '; 

})