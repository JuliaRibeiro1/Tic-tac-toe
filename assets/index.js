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
let empty = [...positionsArr]
let lastArrItem;
let xOrOArr = []
let firstRow;
let secondRow;
let thirdRow;
let firstColumn;
let secondColumn;
let thirdColumn;
let checkBtn = false


oPlayerBtn.addEventListener("click",() =>{
     lastArrItem = "O"
  
})
xPlayerBtn.addEventListener("click",() =>{
     lastArrItem = "X"
})


function checkingWinner(array) {
let winner = array.every(element => {
  if(array[0].textContent !== "") {
    return array[0].textContent === element.textContent;
  }
  
})
if(winner) {
  (setTimeout(() =>{
    restartGameContainer.style.display = "flex"
    winnerPlayer.textContent = array[0].textContent + " is the winner"
  },3000))
}
if(xOrOArr.length > 8) {
if(!winner) {
  console.log(array);
  (setTimeout(() =>{
    restartGameContainer.style.display = "flex"
    winnerPlayer.textContent = "No one won"
  },3000))
}
}
  }
  
const squareArr = Array.from(squares).map(squares => squares.addEventListener("click",function(e){

 firstRow = [positionsArr[0],positionsArr[1],positionsArr[2]] 
 secondRow = [positionsArr[4], positionsArr[5], positionsArr[7]]
 thirdRow = [positionsArr[6],positionsArr[7], positionsArr[6]]
 firstColumn = [positionsArr[0],positionsArr[3],positionsArr[6]]
 secondColumn = [positionsArr[1],positionsArr[4],positionsArr[7]]
 thirdColumn = [positionsArr[2],positionsArr[4],positionsArr[6]]
 diagonal = [positionsArr[0],positionsArr[4],positionsArr[8]]
 reverseDiagonal = [positionsArr[2],positionsArr[4],positionsArr[6]]
 
function fillSquare() {
  xOrOArr.push(lastArrItem)
  squares.textContent = lastArrItem
  if(checkBtn) {
    
    for(let i = 0; i < empty.length; i++) {
      if(empty[i].textContent !== "") {
       empty.splice(i,1)
    
      }
    }
    computerPosition()
  }
    
}

if((xOrOArr.length < 9) &&(squares.textContent === "")) {
  
  
  fillSquare()
  checkLastArrItem()
      
  
    checkingWinner(firstRow)
    checkingWinner(secondRow)
    checkingWinner(thirdRow)
    checkingWinner(firstColumn)
    checkingWinner(secondColumn)
    checkingWinner(thirdColumn)
    checkingWinner(diagonal)
    checkingWinner(reverseDiagonal)
  
  
}


}))

let cont = 0
let checking = false 
xPlayerBtn.addEventListener("click",(e) =>{
  twoOrOnePlayers()
  lastArrItem = "X"
 
})

oPlayerBtn.addEventListener("click",(e) => {
  twoOrOnePlayers()
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

  

function checkLastArrItem() {
  if(lastArrItem == "X" ) {
    /*fillSquare()*/
     lastArrItem = "O" 
    /* computerPosition()*/
  }

  else if(lastArrItem == "O") {
    /*fillSquare()*/
     lastArrItem = "X" 
     /*computerPosition() */  
  }
  }
function checkFirstPlayer() {
  if(!firstPlayerCheckbox.checked) {
   if(lastArrItem == "X") {
      lastArrItem = "O"
    }
    else if(lastArrItem == "O") {
      lastArrItem = "X"
    }
   /* checkLastArrItem()*/
    console.log("checked")
  }
}

function twoOrOnePlayers() {
  twoPlayersBtn.addEventListener('click',() => {
    startGame()
  })
  onePlayerBtn.addEventListener('click',() => {
    startGame()
    checkBtn = true
    
  })
  }

function startGame () {
  gameStartPageContainer.style.display = "none"
  ticTacToeContainer.style.display = "flex"
  checkFirstPlayer()
  
}
function restartGame() {
  xOrOArr = []
  for(let i = 0; i < positionsArr.length; i++) {
    positionsArr[i].textContent = "";

  }
  restartGameContainer.style.display = "none"
}

function computerPosition() {
  for(let i = 0; i < empty.length; i++) {
    if(empty[i].textContent !== "") {
     empty.splice(i,1)
  
    }
  }
  setTimeout(() => {
    
  let computerPosition = Math.floor(Math.random() * empty.length)
  console.log(computerPosition)
  
    
empty[computerPosition].textContent = lastArrItem
    xOrOArr.push(lastArrItem)
    
   
  checkingWinner(firstRow)
  checkingWinner(secondRow)
  checkingWinner(thirdRow)
  checkingWinner(firstColumn)
  checkingWinner(secondColumn)
  checkingWinner(thirdColumn)
  checkingWinner(diagonal)
  checkingWinner(reverseDiagonal)
  },1000); 
}



