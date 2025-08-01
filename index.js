let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset")
let newgame=document.querySelector("#newgame")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let turno=true;
let count = 0;

const winpattern=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];


const resetgame=()=>{
    turno=true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", () => {
    if (turno) {
        box.innerText = "O";
        turno = false;
    } else {
        box.innerText = "X";
        turno = true;
    }
    box.disabled = true;

    count++; 

    let isWinner = checkwinner();
    if (count === 9 && !isWinner) {
        gameDraw();
    }
});
})


const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();
}





const checkwinner=()=>{
    for(let pattern of winpattern){
        let position1=boxes[pattern[0]].innerText;
        let position2=boxes[pattern[1]].innerText;
        let position3=boxes[pattern[2]].innerText;

        if(position1 !="" && position2 !="" && position3 !=""){
            if(position1===position2 && position2===position3){
                console.log("winner")
                showwinner(position1);
            }
        }
    }
};



newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);