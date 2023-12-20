let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let New_Game = document.querySelector(".New_Game")
console.log(resetbtn);

let trunX = true;
let win_msg = document.querySelector('.msg');
let msg_container = document.querySelector(".game_bord2")

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trunX === true) {
      box.innerText = "X";
      trunX = false;
      box.style.color = "red";
      box.disabled = true;
    } else {
      box.innerText = "O";
      trunX = true;
      box.style.color = " green";
      box.disabled = true;
    }
    chekWinneer();
  });
});

const chekWinneer = () => {
  for (let val of winPatterns) {
    let pos1value = boxes[val[0]].innerText;
    let pos2value = boxes[val[1]].innerText;
    let pos3value = boxes[val[2]].innerText;

    if ((pos1value != "", pos2value != "", pos3value != "")) {
      if (pos1value == pos2value && pos2value == pos3value) {
        disabled();
        showWinner(pos1value);
      }
    }
  }
};
const showWinner = (winer) =>{
    win_msg.innerText = `Congratualtions, Winner is ${winer}`;
    msg_container.style.display = "flex";
}

const disabled = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
};

const resetGame = () => {
  trunX = true;
  enableBoxes();
  win_msg.innerText = `Welcome to tic tac toe Game`;
  msg_container.style.display = "none";
};

resetbtn.addEventListener("click", resetGame);
New_Game.addEventListener("click", resetGame);
