console.log("Welcome to Rhythm's games");
let music = new Audio("background-sound.mp3"); 
let turn = new Audio("click.mp3");
let gameover = new Audio("gameover.mp3");
let first = "X";
let Gameover = false; 

const changeTurn = ()=>{
    return first === "X"? "0" : "X";
}


const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 25, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ];
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"; 
            Gameover = true;
            gameover.play();
            document.getElementsByTagName('img')[0].style.width = "205px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        };
    });
}[

let boxes = document.getElementsByClassName("box"); 
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext'); 
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = first;
            first = changeTurn();
            turn.play();
            checkWin();
            if(!Gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for " + first;
            }
    
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    })
    first = "X";
    Gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + first; 
    document.getElementsByTagName('img')[0].style.width = "0px";
})
