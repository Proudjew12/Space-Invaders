'use strict'

var gBoard
const BOARD_SIZE_ROWS = 14
const BOARD_SIZE_COLS = 15

// Create and returns the board with aliens on top, ground at bottom 
// use the functions: createCell, createHero, createAliens  
function createBoard() {
    gBoard = []
    for (let i = 0; i < BOARD_SIZE_ROWS; i++) {
        gBoard[i] = []
        for (let j = 0; j < BOARD_SIZE_COLS; j++) {
            gBoard[i][j] = createCell()
        }
    }
}














