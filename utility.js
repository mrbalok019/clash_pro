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