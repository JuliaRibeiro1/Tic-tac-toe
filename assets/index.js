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


let lastArrItem;
let xOrOArr = []
let boardPositions = []
const positionsArr = Array.from(squares)
oPlayerBtn.addEventListener("click",() =>{
     lastArrItem = "O"
  
})
xPlayerBtn.addEventListener("click",() =>{
     lastArrItem = "X"
})
let firstRow;
let secondRow;
let thirdRow;
let firstColumn;
let secondColumn;
let thirdColumn;

function checkingWinner(array) {
let winner = array.every(element => {
  if(array[0] !== "") {
    var e = element
    return array[0] === element;
  }
  /*return winner;*/
})
if(winner) {
  console.log(e)
}
  }
const squareArr = Array.from(squares).map(squares => squares.addEventListener("click",function(e){
 firstRow = [positionsArr[0].textContent,positionsArr[1].textContent,positionsArr[2].textContent] 
 secondRow = [positionsArr[4].textContent, positionsArr[5].textContent, positionsArr[7].textContent]
 thirdRow = [positionsArr[6].textContent,positionsArr[7].textContent, positionsArr[6].textContent]
 firstColumn = [positionsArr[0].textContent,positionsArr[3].textContent,positionsArr[6].textContent]
 secondColumn = [positionsArr[1].textContent,positionsArr[4].textContent,positionsArr[7].textContent]
 thirdColumn = [positionsArr[2].textContent,positionsArr[4].textContent,positionsArr[6].textContent]
function fillSquare() {
  xOrOArr.push(lastArrItem)
    squares.textContent = lastArrItem
}

if((xOrOArr.length < 9) &&(squares.textContent === "")) {
  if(lastArrItem == "X" ) {
     fillSquare()
     lastArrItem = "O"
  }
  else if(lastArrItem == "O") {
     fillSquare()
     lastArrItem = "X"   
}
checkingWinner(firstRow)
checkingWinner(secondRow)
checkingWinner(thirdRow)
checkingWinner(firstColumn)
checkingWinner(secondColumn)
checkingWinner(thirdColumn)
}
}))
let cont = 0
let checking = false 
xPlayerBtn.addEventListener("click",(e) =>{
/* function a(fun){
    console.log("foix")
    fun(e)
  }a(check)*/
  twoOrOnePlayers()
  lastArrItem = "X"
 /* if(!check) {
    lastArrItem = "O"
  }
  else {
    lastArrItem = "X"
  }*/

  
  console.log(xOrOArr)

})

oPlayerBtn.addEventListener("click",(e) => {
/*function a (fun) {
    console.log("foiO")
    fun(e)
  }a(check)*/
  twoOrOnePlayers()
  lastArrItem = "O"
  /*if(!check) {
    lastArrItem = "X"

  }
  else {
    
  }*/
  console.log(xOrOArr)
})

function check() {
 /* firstPlayerCheckbox.addEventListener("click",(e) => {
  })*/
  console.log(lastArrItem)
  if(!firstPlayerCheckbox.checked) {
    if(lastArrItem == "X") {
      lastArrItem = "O"
    }
    else if(lastArrItem == "O") {
      lastArrItem = "X"
    }
    console.log("checked")
  }
  else {
    console.log("not checked")
  }
}

function twoOrOnePlayers() {
  twoPlayersBtn.addEventListener('click',() => {
    startGame()

  })
  onePlayerBtn.addEventListener('click',() => {
    startGame()
  })

  
  }

function startGame () {
  gameStartPageContainer.style.display = "none"
  ticTacToeContainer.style.display = "flex"
  check()


}


