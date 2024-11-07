let boxes=document.querySelectorAll(".box")

let resetbtn=document.querySelector("#reset-btn")

let newGameBtn=document.querySelector("#new-btn")
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")

let newGamebtn1=document.querySelector("#new-btn1")
let noWinnerContainer=document.querySelector(".noWinner-container")
let noWinnerMsg=document.querySelector("#nowinner-msg")

let turnO=true
const winnPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
    noWinnerContainer.classList.add("hide");
};
let count=0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color="blue"
            turnO = true;
        }

        box.disabled = true;

        
        if (checkWinner()) {
            return; 
        }
        
        count++; 
        
        
        if (count === 9) {
            noWinnerMsg.innerText = `Bad luck, play again`;
            noWinnerContainer.classList.remove("hide");
            disableBoxes();
        }
    });
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winnPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val);
            return true;
        }
    }
    return false;
};

newGamebtn1.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
