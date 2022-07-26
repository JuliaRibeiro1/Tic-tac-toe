//VARIABLES 
const squares = document.querySelectorAll(".grid-item")
const xPlayerBtn = document.querySelector(".xPlayerBtn")
const oPlayerBtn = document.querySelector(".oPlayerBtn")
const twoPlayersBtn = document.querySelector(".twoPlayersBtn")
const onePlayerBtn = document.querySelector(".onePlayerBtn")
const oPlayer = document.querySelector(".oPlayer")
const xPlayer = document.querySelector("xPlayer")
const gameStartPageContainer = document.querySelector(".game-start-page-container")
const ticTacToeContainer = document.querySelector(".tic-tac-toe")
const firstPlayerCheckbox = document.querySelector(".firstPlayerCheckbox")
const restartGameContainer = document.querySelector(".tic-tac-toe-restart-game-container")
const backMenuBtn = document.querySelector(".backToMenuBtn")
const restartGameBtn = document.querySelector(".restartGameBtn")
let winnerPlayer = document.querySelector(".tic-tac-toe-winner-player")
const positionsArr = Array.from(squares)
const xOrObtns = document.querySelector(".xOrObtns")
let empty = [...positionsArr]
let xOrOArr = []
let lastArrItem = xOrOArr.slice(-1)
let firstRow;
let secondRow;
let thirdRow;
let firstColumn;
let secondColumn;
let thirdColumn;
let diagonal;
let reverseDiagonal;
let checkBtn = false

const squareArr = Array.from(squares).map(squares => squares.addEventListener("click",function(e){
//ONE OF THESE ROWS OR COLUMNS SHOULD BE FILLED WITH THE SAME ITEM 
 firstRow = [positionsArr[0],positionsArr[1],positionsArr[2]] 
 secondRow = [positionsArr[4], positionsArr[5], positionsArr[7]]
 thirdRow = [positionsArr[6],positionsArr[7], positionsArr[6]]
 firstColumn = [positionsArr[0],positionsArr[3],positionsArr[6]]
 secondColumn = [positionsArr[1],positionsArr[4],positionsArr[7]]
 thirdColumn = [positionsArr[2],positionsArr[4],positionsArr[6]]
 diagonal = [positionsArr[0],positionsArr[4],positionsArr[8]]
 reverseDiagonal = [positionsArr[2],positionsArr[4],positionsArr[6]]
 //fillSquare WILL BE CALLED EVERYTIME A SQUARE IS CLICKED ON
function fillSquare() {
  /*if((!firstPlayerCheckbox.checked)&&(checkBtn)) {
    checkLastArrItem()
  }*/
//WILL CHECK IF THERE'S ONLY ONE PLAYER, IF IT IS computerPosition WILL BE CALLED  
if(checkBtn) {
 if((!firstPlayerCheckbox.checked)) {
    checkLastArrItem()
  }
  cleanPositionsArr()
  console.log(lastArrItem)
  setTimeout(() => {
  console.log(lastArrItem)
  computerPosition()
  },500)
}
  xOrOArr.push(lastArrItem)
  squares.textContent = lastArrItem
}

if((xOrOArr.length < 9) &&(squares.textContent === "")) {
    fillSquare()
    checkLastArrItem()
    checkingWinnerFunctions()
}}))
//EVENTS 
//xPlayerBtn AND oPlayerBtn WILL CHECK WHO SHOULD BE THE FIRST PLAYER IF THE FIRST PLAYER CHECKBOX IS CHECKED
xPlayerBtn.addEventListener("click",(e) =>{
  //twoOrOnePlayers()
  lastArrItem = "X"
})
oPlayerBtn.addEventListener("click",(e) => {
 // twoOrOnePlayers()
  lastArrItem = "O"
})
restartGameBtn.addEventListener("click",() => {
  restartGame()
})
backMenuBtn.addEventListener("click",() => {
  gameStartPageContainer.style.display = "flex"
  ticTacToeContainer.style.display = "none"
  restartGame()
})
//FUNCTIONS
//CHECKING WINNER OR IF NO ONE WON, checkingWinner WILL BE CALLED EVERYTIME A SQUARE IS FILLED 
function checkingWinner(array) {
  let winner = array.every(element => {
    if(array[0].textContent !== "") {
      return array[0].textContent === element.textContent;
    }})
  if(winner) {
    console.log(array)
    winnerContainerPopUp()
    winnerPlayer.textContent = array[0].textContent + " is the winner"
  }
//CHECKING IF NO ONE WON WHEN THE BOARD IS COMPLETELY FILLED
  if(xOrOArr.length >= 10) {
  if(!winner) {
      winnerContainerPopUp()
      winnerPlayer.textContent = "No one won"
  }}}
//checkLastArrItem WILL CHECK IF X OR O SHOULD BE PUSHED TO THE ARRAY BASED ON THE LAST ARRAY ELEMENT, IF X IS THE LAST ELEMENT O SHOULD BE THE NEXT ELEMENT
function checkLastArrItem() {
  if(lastArrItem == "X" ) {
    lastArrItem = "O"
  }
  else if(lastArrItem == "O") {
    lastArrItem = "X"
  }}
//checkFirstPlayer WILL CHECK IF X OR O SHOULD BE THE FIRST PLAYER, IF THE CHECKBOX IS NOT CHECKED IT WILL START WITH O IF THE USER CHOSE X AND O IF THE USER CHOSE X
function checkFirstPlayer() {
  if(!firstPlayerCheckbox.checked) {
   checkLastArrItem()
   if(checkBtn) {
    computerPosition()
   }
  }}
function checkPlayer() {
  if(lastArrItem == "") {
    xOrObtns.classList.add("add")
  }else {
    startGame()
  }}
//WILL CHECK IF ITS 2 PLAYER OR JUST ONE
//function twoOrOnePlayers() {
  twoPlayersBtn.addEventListener('click',() => {
   checkPlayer()
  })
  onePlayerBtn.addEventListener('click',() => {4
    checkBtn = true
    checkPlayer()
  })

function startGame () {
  gameStartPageContainer.style.display = "none"
  ticTacToeContainer.style.display = "flex"
  checkFirstPlayer()
}
//WILL TELL WHO WON 
function winnerContainerPopUp(){(setTimeout(() =>{
  restartGameContainer.style.display = "flex"
},2000))
}
//WILL CHECK IF A COLUMN OR ROW IS FILLED ONLY WITH X OR O, MEANING THAT THE GAME IS OVER
function checkingWinnerFunctions() {
  checkingWinner(firstRow)
  checkingWinner(secondRow)
  checkingWinner(thirdRow)
  checkingWinner(firstColumn)
  checkingWinner(secondColumn)
  checkingWinner(thirdColumn)
  checkingWinner(diagonal)
  checkingWinner(reverseDiagonal)
}
function cleanPositionsArr() {
  for(let i = 0; i < empty.length; i++) {
    if(empty[i].textContent !== "") {
     empty.splice(i,1)
    }
  }}
function restartGame() {
  xOrOArr = []
  empty = [...positionsArr]
  for(let i = 0; i < positionsArr.length; i++) {
    positionsArr[i].textContent = "";
  }
  restartGameContainer.style.display = "none"
}
//WILL FILL A SQUARE AUTOMATICALLY IN CASE THERE IS ONLY ONE PLAYER 
function computerPosition() {
  //WILL REMOVE A SQUARE FROM THE ARRAY THAT IS ALREADY FILLED SO THE COMPUTER WON'T FILL THE WRONG SQUARE
   cleanPositionsArr()
    let computerPosition = Math.floor(Math.random() * empty.length)
    xOrOArr.push(lastArrItem)
    console.log(lastArrItem)
    empty[computerPosition].textContent = lastArrItem
    checkingWinnerFunctions()//WILL ALSO CHECK IF THERE IS A WINNER EVERYTIME THE COMPUTER FILL A SQUARE
   checkLastArrItem()
    console.log(lastArrItem) 
}