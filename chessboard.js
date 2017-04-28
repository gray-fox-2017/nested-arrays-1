'use strict'

const makeChessboard = () => {
  let chessboard = []
  let bidak=['Benteng','Kuda','Peluncur','Ratu','Raja','Peluncur','Kuda','Benteng']

  for(let i=0;i<8;i++)
  {
    if(i===0){
      let hasil=[];
      for(let j=0;j<8;j++){
        hasil.push(bidak[j]+ ' Hitam')
      }
      chessboard.push(hasil)
    }else if(i===7){
      let hasil=[];
      for(let j=0;j<8;j++){
        hasil.push(bidak[j]+ ' Putih')
      }
      chessboard.push(hasil)

    }else if(i===1 || i===2){
      let hasil=[];
      for(let j=0;j<8;j++){
        hasil.push('Pion Hitam')
      }
      chessboard.push(hasil)

    }else if(i===5 || i===6){
      let hasil=[];
      for(let j=0;j<8;j++){
        hasil.push('Pion Putih')
      }
      chessboard.push(hasil)

    }else {
      let hasil=[];
      for(let j=0;j<8;j++){
        hasil.push(' ')
      }
      chessboard.push(hasil)
    }
  }
    return chessboard;
}

const printBoard = x => {
  // ... write your code here
  for(let i=0; i<8;i++){
    console.log(x[i].join(" ")+'\n')
  }

}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
