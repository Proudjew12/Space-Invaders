'use strict'

const ALIEN = '👾'
const ALIEN_COL_LENGTH = 8
const ALIEN_ROW_LENGTH = 2
const ALIEN_NORMAL_POINTS = 10


function createAliens(board) {
    gAliensTopRowIdx = 2
    gAliensBottomRowIdx = 2 + ALIEN_ROW_LENGTH - 1
    gAliensLeftColIdx = 4
    gAliensRightColIdx = 4 + ALIEN_COL_LENGTH - 1


    for (let i = 0; i < ALIEN_ROW_LENGTH; i++) {
        for (let j = 0; j < ALIEN_COL_LENGTH; j++) {

            board[i + 2][j + 4].gameObject = { icon: ALIEN }
        }
    }
}


function countAlien(board) {
    gGame.alienCount = 0
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cellObj = board[i][j].gameObject
            if (cellObj && cellObj.icon === ALIEN) gGame.alienCount++
        }
    }
}

