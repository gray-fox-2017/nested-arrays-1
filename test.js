const assert = require('assert')

const { makeChessboard, printBoard } = require('./chessboard.js')
//const Spreadsheet = require('./spreadsheet.js')

const chessboard = makeChessboard()
describe('Chessboard Release 0', () => {
  it('should "Benteng Putih" if pos is 7, 0', () => {
    assert.deepEqual(chessboard[7][0], 'Benteng Putih')
  })
  it('should "Kuda Hitam" if pos is 0, 1', () => {
    assert.deepEqual(chessboard[0][1], 'Kuda Hitam')
  })
  it('should "Pion Putih" if pos is 6, 4', () => {
    assert.deepEqual(chessboard[6][4], 'Pion Putih')
  })
  it('should "Gajah Hitam" if pos i 0, 5', () => {
    assert.deepEqual(chessboard[0][5], 'Gajah Hitam')
  })
})
