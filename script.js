
function onKeyPress(event){
//clicked
    const playerPressed=event.key;
//needed
  const neededAlphabetId =document.getElementById('screenFont');
  const neededAlphabet = neededAlphabetId.innerText;
  const expectedAlphabet=neededAlphabet.toLowerCase();



  let scoreText=document.getElementById('score');
  let scoreValue=scoreText.innerText;
  let score=parseInt(scoreValue);
if(playerPressed===expectedAlphabet){

  score= scoreUpdate(score);

  
  removeKeyColor(playerPressed);
  continueGame();



 

}
else{
  let lifeText=document.getElementById('life');
  let lifeValue= lifeText.innerText;
  let life= parseInt(lifeValue);
  life= lifeUpdate(life);
  if(life===0){
    hideElementById('gameScreen');
    unhideElementById('scorePage');

    const finalScore= document.getElementById('finalScore');
    finalScore.innerText=score;
 
     }
 

 
}
//  console.log(life);
//   console.log(score);


}

document.addEventListener('keyup',onKeyPress);


function continueGame(){
    const alphabet=randomAlphabet();
    

    const font=document.getElementById('screenFont');
    font.innerText=alphabet;
    setKeyColor(alphabet);

}

function play(){
  

  hideElementById('playPage');
  unhideElementById('gameScreen');
  continueGame();
  

}

function playAgain(){
  const neededAlphabetId =document.getElementById('screenFont');
  const neededAlphabet = neededAlphabetId.innerText;
  removeKeyColor(neededAlphabet);


  

  hideElementById('scorePage');
  unhideElementById('playPage');


  let lifeText=document.getElementById('life');
  lifeText.innerText='3';

  let scoreText=document.getElementById('score');
  scoreText.innerText='0'

  
    
   



}