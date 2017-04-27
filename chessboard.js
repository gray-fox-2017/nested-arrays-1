'use strict'

const makeChessboard = () => {
  let chessboard = []
  let bidak_putih=['Benteng Putih','Kuda Putih','Peluncur Putih','Ratu Putih','Raja Putih','Peluncur Putih','Kuda Putih','Benteng Putih']
  let pion_putih=['pion Putih','pion Putih','pion Putih','pion Putih','pion Putih','pion Putih','pion Putih','pion Putih']
  let bidak_hitam=['Benteng Hitam','Kuda Hitam','Peluncur Hitam','Ratu Hitam','Raja Hitam','Peluncur Hitam','Kuda Hitam','Benteng Hitam']
  let pion_hitam=['pion Hitam','pion Hitam','pion Hitam','pion Hitam','pion Hitam','pion Hitam','pion Hitam','pion Hitam']

  for(let i=0;i<8;i++)
  {
    if(i<4){
      if(i===0)
      chessboard.push(bidak_putih);
      else chessboard.push(pion_putih);
    }else{
      if(i===7)
      chessboard.push(bidak_hitam);
      else chessboard.push(pion_hitam);
    }
  }
  return chessboard
}

const printBoard = x => {
  // ... write your code here
  console.log(x)
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
