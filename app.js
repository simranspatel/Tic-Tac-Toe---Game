let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn  = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]

];



boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        
        if(turnO){
            box.innerText = "O";
            box.classList.add("oColor");
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("xColor");
            turnO = true;
        }
        box.disabled = true ;
        checkWinner();
       
    });

   
});

const resetGame = () =>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");
}
 
const disableBox = () =>{
    for( let box of boxes){
        box.disabled = true;
    }
}
const enableBox = () =>{
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};
const checkWinner = () =>{
    for (let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if ( pos1val !=0 && pos2val !=0 && pos3val !=0){
            if(pos1val === pos2val && pos2val === pos3val){
               
                showWinner(pos1val);
            } 
        }
    }

   
};

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);