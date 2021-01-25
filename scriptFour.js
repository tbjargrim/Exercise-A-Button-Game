const container= document.getElementById('container');
const colors = ['#4DA859', '#389CBA', '#BA38B6', '#B22742','#FFBAA1'];
const SQUARES= 500;
const btn = document.querySelector('.buttonFour');
const body = document.querySelector('.bodyFour');
for (let i = 0; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

        square.addEventListener('mouseover', () => setColor(square))
    
    square.addEventListener('mouseout', () => removeColor(square))
   
    container.appendChild(square)
}

function setStyleButton(){

}
btn.addEventListener('click',() => 
 body.classList.add('endOfGame'));



function setColor(element){
const color= getRandomColor()
element.style.background=color;
element.style.boxShadow=`0 0 2px ${color}, 0 0 10px ${color}`;

}
function removeColor(element){
element.style.background = `#1d1d1d`;
element.style.boxShadow= `0 0 2px #000`;
}
function getRandomColor(){
    return colors[Math.floor(Math.random()*colors.length)]
}