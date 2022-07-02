const squares = document.querySelectorAll(".grid-item")
const xPlayerCheckbox = document.querySelector(".xPlayerBtn")
const oPlayerCheckbox =document.querySelector(".oPlayerBtn")
let lastArrItem;
let xOrOArr = []
let boardPositions = []
oPlayerCheckbox.addEventListener("click",() =>{
     lastArrItem = "O"
})
xPlayerCheckbox.addEventListener("click",() =>{
     lastArrItem = "X"
})

const positionsArr = Array.from(squares)
const squareArr = Array.from(squares).map(squares => squares.addEventListener("click",function(e){
  // let lastArrItem = xOrOArr.slice(-1)
  
console.log(positionsArr[0].textContent)
function fillSquare() {
    
     squares.textContent = lastArrItem
     xOrOArr.push(lastArrItem)
    
     //console.log(positionsArr[1].textContent)
}
function checkingWinner() {
     
     if((positionsArr[0].textContent === positionsArr[1].textContent) && (positionsArr[0].textContent === positionsArr[2].textContent)) {
       console.log("1")
       
     }
     else if((positionsArr[0].textContent === positionsArr[3].textContent) && (positionsArr[0].textContent === positionsArr[6].textContent)) {
       console.log("2")
     }
     else if((positionsArr[3].textContent === positionsArr[5].textContent) && (positionsArr[3].textContent === positionsArr[8].textContent)) {
       console.log("3")
     }
} 
if((xOrOArr.length < 9) &&(squares.textContent == "")) {
     
    console.log("OPA")
    if(lastArrItem == "X" ) {
     fillSquare()
     lastArrItem = "O"
    
     }
     else if(lastArrItem == "O") {
     fillSquare()
     lastArrItem = "X"
    if(xOrOArr.length > 2) {
     checkingWinner()
    }
    
    
}
}

}))