function tic_tac_toe_board () {
  // ...
  let tempArray = [];
  let x = 0;
  let o = 0;
  for(let i=0;i<9;i++){
    let random = Math.random()
    if(random<0.5){
      if(x<5){
        tempArray.push('x');
        x++
      } else {
        tempArray.push('o');
        o++
      }
    } else {
      if(o<5){
        tempArray.push('o');
        o++
      } else {
        tempArray.push('x');
        x++
      }
    }
  }
   tempArray.push(x)
   tempArray.push(o)
  // return tempArray
  let tic_tac_toe_array = []
  for(let i=0;i<tempArray.length;i+=3){
    tic_tac_toe_array.push(tempArray.slice(i,i+3))
  }
  return tic_tac_toe_array

}

console.log(tic_tac_toe_board()) // => make a random tic tic board
