function tic_tac_toe_board () {
  let countX = 0;
  let countO = 0;
 let hasil = [];

 for(let i=0; i<3; i++){
   hasil.push([]);
 }

 for (let i=0; i<3; i++) {
   for (let j=0; j<3; j++) {
     let random = Math.floor(Math.random()*2);

     if(random == 0 && countX < 5){
       hasil[i].push('X');
       countX++;
     }else if (countO < 5) {
       hasil[i].push('O');
       countO++;
     }
     else if (countX == 5 && countO < 5 ) {
       hasil[i].push('O');
       countO++;
     }
   }

 }
 return hasil;
}
console.log(tic_tac_toe_board()) // => make a random tic tic board
