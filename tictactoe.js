function tic_tac_toe_board () {
  // ...
  let result = [];
  var boardsLength = 3;
  let xCount = (Math.round(Math.random() === 0)) ? 4 : 5;

  let oCount = 9-xCount;
  for(let i = 0; i < boardsLength ; i++){
    let newArr = [];
    result.push(newArr);
    for(let j = 0; j < boardsLength ; j++){
      var randomc = Math.random();
      var a = Math.round(randomc);
      let value
      // console.log('-------------', randomc);
      if( a === 0 && xCount > 0 ){
        value =  "X"
        xCount -= 1
      }else if(a === 1 && oCount > 0){
        value = "O"
        oCount -= 1
      }else{
        value = (xCount == 0) ? "O" : "X"
      }
      result[i].push(value);
    }
  }
  return result;
}

console.log(tic_tac_toe_board()) // => make a random tic tic board
