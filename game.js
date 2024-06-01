// let boxes = document.querySelectorAll(".box");
// let resetBtn = document.querySelector("#reset-btn");
// let GameBtn = document.querySelector("#new-btn");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("msg");

// let turnO = 1;
// const winPattern = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
// ];
// const resetGame = () => {
//     turnO = 1;
//     enableBoxes();
//     msgContainer.classList.add("hide")
// }

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//         if (turnO === 1) {
//             box.innerText = "x";
//             turnO = 0;
//         }
//         else {
//             box.innerText = "o";
//             turnO = 1;
//         }
//         box.disabled = 1;
//         checkWinner();
//     });
// });
// const disableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = 1;
//     }
// };
// const enableBoxes = () => {
//     for (let box of boxes) {
//         box.disabled = 0;
//         box.innerText = "";
//     }
// }
// const showWinner = (winner) => {
//     msg.innerText = `Congradulation,winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// }
// const checkWinner = () => {
//     for (let pattern of winPattern) {

//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;
//         if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
//             if (pos1Val === pos2Val && pos2Val === pos3Val) {
//                 // console.log("winner");
//                 // pos1Val = "priti";
//                 // console.log("winner is ", pos1Val);
//                 showWinner(pos1Val)

//             }

//         }

//     }
// }
// GameBtn.addEventListener("click", resetGame);
// resetBtn.addEventListener("click", resetGame);
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let GameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg"); // Corrected selector for msg
let turnO = 1;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    turnO = 1;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === 1) {
            box.innerText = "x";
            turnO = 0;
        }
        else {
            box.innerText = "o";
            turnO = 1;
        }
        box.disabled = true;
        checkWinner();
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
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`; // Corrected spelling of "Congratulations" and added missing `$` for string interpolation
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}
GameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
