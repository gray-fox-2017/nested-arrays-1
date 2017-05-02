'use strict'

const makeChessboard = () => {
  let chessboard = []
    let chess = ["Benteng ", "Kuda ", "Gajah ", "Menteri ", "Raja ", "Gajah ", "Kuda ", "Benteng "]
    let color = ["Hitam", "Putih"];

    // ... write your code here
    for (let i = 0; i < chess.length; i++){
      let newArr = [];
      chessboard.push(newArr);
      for(let j = 0; j < chess.length; j++){
        if (i == 0){
          chessboard[i].push(chess[j]+color[0])
        }else if(i == 1){
          chessboard[i].push("Bidak "+color[0])
        }else if(i == 7){
          chessboard[i].push(chess[j]+color[1])
        }else if(i == 6){
          chessboard[i].push("Bidak  "+color[1])
        }else{
          chessboard[i].push("___________")
        }
      }
    }
    return chessboard
}

const printBoard = board => {
  // ... write your code here
  for(let i = 0; i < 8 ; i++){
    console.log(`${i+1} ${board[i].join(" |")}`)

  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
