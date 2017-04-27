function tic_tac_toe_board () {
  // ...
  let arr=[];
  let board=[];
  let random_number = Math.floor(Math.random()*10);

  if(random_number%2===0){
    for(let i=1; i<=9; i++){
      if(i%2===0)
        arr.push('X');
      else arr.push('O');
    }
  }else{
    for(let i=1; i<=9; i++){
      if(i%2===0)
        arr.push('O');
      else arr.push('X');
    }
  }


    for(let i=0;i<9;i+=3){
      board.push(arr.slice(i,i+3));
    }

  return board;

}

console.log(tic_tac_toe_board()) // => make a random tic tic board
