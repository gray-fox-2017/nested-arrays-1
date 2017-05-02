const makeChessboard = () => {
  let baris_belakang = ['rook','knight','bishop','queen','king','bishop','knight','rook'];
  let chessboard = [];

  for (let i = 0; i < baris_belakang.length; i++) {
    if(i==0){
      chessboard.push([]);
      for (let j = 0; j < baris_belakang.length; j++) {
        chessboard[i].push('Black '+ baris_belakang[j]);
      }
    }else if(i==1){
      chessboard.push([]);
      for (let j = 0; j < baris_belakang.length; j++) {
        chessboard[i].push('Black Pawn');
      }
    }else if(i==2){
      chessboard.push([]);
    }else if(i==3){
      chessboard.push([]);
    }else if(i==4){
      chessboard.push([]);
    }else if(i==5){
      chessboard.push([]);
    }else if (i==6) {
      chessboard.push([]);
      for (let j = 0; j < baris_belakang.length; j++) {
        chessboard[i].push('White Pawn');
      }
    }else if (i==7) {
      chessboard.push([]);
      for (let j = 0; j < baris_belakang.length; j++) {
        chessboard[i].push('White '+ baris_belakang[j]);
      }
    }

}
return chessboard;
}

const printBoard = x => {
  console.log(x);
}

printBoard(makeChessboard())
