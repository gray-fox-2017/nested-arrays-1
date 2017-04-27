'use strict'

const makeChessboard = () => {
  let chessboard = []
  // ... write your code here
  var bidakMentri = ['Benteng', 'Kuda', 'Gajah', 'Mentri', 'Raja', 'Gajah', 'Kuda', 'Benteng'];
  var pionHitam = [], bidakMentriHitam = [], bidakMentriPutih=[], pionPutih = [], spaces = [];
  var putih = 'putih', pion = 'Pion', hitam = 'hitam', space = 'kosong';
  for (let i=0; i<bidakMentri.length; i++){
    pionHitam.push(pion+' '+hitam);
    pionPutih.push(pion+' '+putih);
    bidakMentriHitam.push(bidakMentri[i]+' '+hitam);
    bidakMentriPutih.push(bidakMentri[i]+' '+putih);
    spaces.push(space);
  }
  for (let i=0; i<4; i++){
    chessboard.push(spaces);
  }
  chessboard.unshift(pionPutih);
  chessboard.unshift(bidakMentriPutih);
  chessboard.push(pionHitam);
  chessboard.push(bidakMentriHitam);
  return chessboard
}

const printBoard = x => {
  // ... write your code here
  var print = [];
  for (let i=0; i<8; i++){
    console.log(`Papan ke ${i+1} : ${x[i].join(' | ')}`);
  }
}

printBoard(makeChessboard())

module.exports = {
  makeChessboard,
  printBoard
}
