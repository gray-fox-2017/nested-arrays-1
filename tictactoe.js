function tic_tac_toe_board () {
  // ...
  let result = [];
  var boardsLength = 3;
  let random_notation = (Math.round(Math.random() === 0)) ? 4 : 5;

  let O_notation = 9-random_notation;
  for(let i = 0; i < boardsLength ; i++){
    let newArr = [];
    result.push(newArr);
    for(let j = 0; j < boardsLength ; j++){
      if(Math.round(Math.random() === 0)){
        let value =  random_notation > 0 ? "X" : "O";
        random_notation--
      }else{
        value = O_notation > 0 ? "X" : "O";
        O_notation--
      }
      result[i].push(value);
    }
  }
  return result;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
