'use strict'

const makeChessboard = () => {
  let chessboard = []
  let empty = ""
  let chess = ["Benteng","Kuda","Luncur","Ster","Raja","Luncur","Kuda","Benteng"]
  let pion = "Pion"
  let color = ["Hitam","Putih"]
  for (let i = 0; i < 8; i++){
    chessboard.push([])
  }
  for (let i = 0; i < 8; i++){
  chessboard[0].push(" " + chess[i] + " " + color[0])
  chessboard[1].push(" " + pion + " " + color[0])
  chessboard[2].push(empty)
  chessboard[3].push(empty)
  chessboard[4].push(empty)
  chessboard[5].push(empty)
  chessboard[6].push(" " + pion + " " + color[1])
  chessboard[7].push(" " + chess[i] + " " + color[1])
  }

  return chessboard
}

const printBoard = x => {
console.log(x)
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
