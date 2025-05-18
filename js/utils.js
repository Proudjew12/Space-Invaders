'use strict'

function getRandomColor() {
    const letters = '0123456789ABCDEF'

    var color = '#'

    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

function createCell(gameObject = null) {
    return {
        type: 'Sky',
        gameObject: gameObject
    }
}
function updateCell(pos, gameObject = null) {
    gBoard[pos.i][pos.j].gameObject = gameObject
    var elCell = getElCell(pos)
    var cellContent = ''

    if (gameObject !== null) cellContent = gameObject.icon

    elCell.innerHTML = cellContent
}
function getElCell(pos) {
    return document.querySelector(`[data-i='${pos.i}'][data-j='${pos.j}']`)
}
