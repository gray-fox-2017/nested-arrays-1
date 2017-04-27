function tic_tac_toe_board () {
  // ...
  let board = [],
      countX=0,
      countO=0;


 for(var i = 0 ; i < 3 ; i ++){
   var baris=[];
    for(var j =0 ; j < 3 ; j ++){

      var random=Math.floor(Math.random()*2);
   if(random === 0  && countX < 5){

     countX++;
     baris.push('X');
   }else if(countO < 5){

     countO++;
      baris.push('O');
   }else{

     countX++;
      baris.push('X' || 'Y');
   }
 }
  board.push(baris);
 }

 return board;

}

console.log(tic_tac_toe_board()); // => make a random tic tic board
