let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");

let turnO = true;

const disableButtons = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableButtons = () => {
    for (let box of boxes) {
        box.enable = true;
        box.innerText="";
    }
}

const printWinner =(pos1Val) =>{
    let msg = document.querySelector("#msg");
    let msgbox = document.querySelector("#msgW");
    msgbox.style = "background-color:red" ;
    msg.innerText = msg.innerText+"  "+pos1Val;
    disableButtons();
}

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if(turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns) {
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
                if(pos1Val === pos2Val && pos2Val == pos3Val) {
                    printWinner(pos1Val);
                }
            }
            
    }
}

const resetGame = () => {
    turnO = true;
    enableButtons();
}

resetBtn.addEventListener("click", resetGame);