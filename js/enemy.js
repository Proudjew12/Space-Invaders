'use strict'

const ALIEN = '👽'
const ALIEN_SPEED = 500
const ALIEN_COL_LENGTH = 3
const ALIEN_ROW_LENGTH = 1

var gIntervalAliens

// The following two variables represent the part of the matrix (some rows) 
// that we should shift (left, right, and bottom) 
// We need to update those when: 
// (1) shifting down and (2) last alien was cleared from row 
var gAliensTopRowIdx
var gAliensBottomRowIdx

var gIsAlienFreeze = true

function createAliens(board) {
    for (let i = 0; i < ALIEN_ROW_LENGTH; i++) {
        for (let j = 0; j < ALIEN_COL_LENGTH; j++) {
            board[i + 6][j + 6].gameObject = {
                icon: ALIEN,
                speed: ALIEN_SPEED,
            }
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




function handleAlienHit(pos) { }
function shiftBoardRight(board, fromI, toI) { }
function shiftBoardLeft(board, fromI, toI) { }
function shiftBoardDown(board, fromI, toI) { }

// runs the interval for moving aliens side to side and down 
// it re-renders the board every time 
// when the aliens are reaching the hero row - interval stops 
function moveAliens() { } 
