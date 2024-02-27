function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}
function unhideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}
function randomAlphabet(){
    const alphabetString= 'abcdefghijklmnopqrstuvwxyz';

    const alphabets=alphabetString.split('');
   
    const randomNumber= Math.random()*25;
    const random = Math.round(randomNumber);
    const alphabet=alphabets[random];
    return alphabet;
}

function setKeyColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeKeyColor(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function scoreUpdate(sValue){
    sValue++;
    const scoreShow= document.getElementById('score');
    scoreShow.innerText='';
    scoreShow.innerText=sValue;

    return sValue;
}

function lifeUpdate(lValue){


        lValue--;  
       
    const lifeShow=document.getElementById('life');
     lifeShow.innerText='';
    lifeShow.innerText=lValue;
  
    return lValue;
}