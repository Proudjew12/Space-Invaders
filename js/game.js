'use strict'

var gGame = {
    isOn: false,
    alienCount: 0
}

function onInit() {
    createBoard()

    createHero(gBoard)
    createAliens(gBoard)
    countAlien(gBoard)

    startAliens()
    renderBoard(gBoard)

    console.table(gBoard)

}


