
function onKeyPress(event){
//clicked
    const playerPressed=event.key;
//needed
const neededAlphabetId =document.getElementById('screenFont');
const neededAlphabet = neededAlphabetId.innerText;
const expectedAlphabet=neededAlphabet.toLowerCase();
if(playerPressed===expectedAlphabet){
console.log("yeh");
}
else{
  console.log("ohhoo");
}



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