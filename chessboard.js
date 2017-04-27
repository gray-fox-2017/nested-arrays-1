'use strict'

const makeChessboard = () => {
  let chessboard = [];
  let royalArray = ['Benteng','Kuda','Peluncur','Raja','Ratu','Peluncur','Kuda','Benteng'];
  let pion = 'Pion';
  let color = ['Hitam','Putih'];
  for(let i=0;i<royalArray.length;i++){
    chessboard.push(`${royalArray[i]} ${color[0]}`)
  }
  for(let i=0;i<royalArray.length;i++){
    chessboard.push(`${pion} ${color[0]}`)
  }
  for(let j=0;j<4;j++){
    for(let i=0;i<royalArray.length;i++){
      chessboard.push(` - `)
    }
  }
  for(let i=0;i<royalArray.length;i++){
    chessboard.push(`${pion} ${color[1]}`)
  }
  for(let i=0;i<royalArray.length;i++){
    chessboard.push(`${royalArray[i]} ${color[1]}`)
  }
  return chessboard
}

const printBoard = x => {
  // ... write your code here
  let printedBoard = []
  for(let i=0;i<x.length;i+=8){
    printedBoard.push(x.slice(i,i+8).join('|'))
  }
  //return printedBoard
  console.log(printedBoard)
}
//======================================function 2 lebih rapih===================================
const makeChessboard2 = () => {
  let chessboard = [];
  let royalArray = ['B','K','P','R','r','P','K','B'];
  let pion = 'i';
  let color = ['H','P'];
  for(let i=0;i<royalArray.length;i++){
    chessboard.push(`${royalArray[i]}${color[0]}`)
  }
  for(let i=0;i<royalArray.length;i++){
    chessboard.push(`${pion}${color[0]}`)
  }
  for(let j=0;j<4;j++){
    for(let i=0;i<royalArray.length;i++){
      chessboard.push(`__`)
    }
  }
  for(let i=0;i<royalArray.length;i++){
    chessboard.push(`${pion}${color[1]}`)
  }
  for(let i=0;i<royalArray.length;i++){
    chessboard.push(`${royalArray[i]}${color[1]}`)
  }
  return chessboard
}

const printBoard2 = x => {
  // ... write your code here
  let printedBoard = []
  for(let i=0;i<x.length;i+=8){
    printedBoard.push(x.slice(i,i+8).join('|'))
  }
  //return printedBoard
  console.log(printedBoard)
}

printBoard(makeChessboard())
printBoard2(makeChessboard2())

module.exports = {
  makeChessboard,
  printBoard
}
