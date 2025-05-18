'use strict'

function renderBoard(board) {
    var strHTML = ''
    for (let i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (let j = 0; j < board[i].length; j++) {
            var cellId = `cell-${i}-${j}`
            const obj = board[i][j].gameObject
            var cellContent = (obj) ? obj.icon : ''

            strHTML += `<td
            id="${cellId}"
            data-i="${i}" data-j="${j}"
            >${cellContent}</td>`
        }
        strHTML += '</tr>'
    }
    var elBoard = document.querySelector('.table-container table tbody')
    elBoard.innerHTML = strHTML
}