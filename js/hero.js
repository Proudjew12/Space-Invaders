'use strict'


var HERO = '🤡'
var LASER = '🎇'
let LASER_SPEED = 100

var gLives = 3
var gPoints = 0
var gSuperAttack = 3
var gExplosion = 3

var gHero = { pos: { i: 12, j: 7 }, isShoot: false }
var gHeroElements
var gIntervalShoot

function createHero(board) {

    gHeroElements = {
        icon: HERO,
        attack: LASER,
        attackSpeed: LASER_SPEED,
    }
    board[gHero.pos.i][gHero.pos.j].gameObject = gHeroElements


}
function onKeyDown(ev) {
    switch (ev.key) {
        case 'ArrowLeft':
            moveHero(-1)
            break
        case 'ArrowRight':
            moveHero(1)
            break
        case ' ':
        case 'Space':
        case 'Spacebar':
            shoot()
            break
        case 's':
            superAttack()
            break
        case 'x':
            explosion()
            break
    }
}
function moveHero(dir) {
    if (gHero.pos.j + dir < 0 || gHero.pos.j + dir >= gBoard[0].length) return

    updateCell(gHero.pos, null)

    gHero.pos.j += dir

    updateCell(gHero.pos, gHeroElements)
}
function shoot() {

    if (gHero.isShoot) return
    gHero.isShoot = true

    let i = gHero.pos.i - 1
    let j = gHero.pos.j

    gIntervalShoot = setInterval(() => {
        if (i < 0) {
            clearInterval(gIntervalShoot)
            gHero.isShoot = false

            return
        }
        const cellObj = gBoard[i][j].gameObject
        if (cellObj && cellObj.icon === ALIEN) {
            updateCell({ i, j }, null)
            clearInterval(gIntervalShoot)
            gHero.isShoot = false
            gGame.alienCount--
            gPoints += ALIEN_NORMAL_POINTS

            const elPoints = document.querySelector('.points-container h1')
            elPoints.innerHTML = `Points: <span>${gPoints}</span>`

            checkWinning()
            return
        }
        blinkLaser({ i, j })
        i--
    }, LASER_SPEED);
}
function blinkLaser(pos) {

    updateCell(pos, { icon: LASER })
    setTimeout(() => {
        if (gBoard[pos.i][pos.j].gameObject.icon === LASER) {
            updateCell(pos, null)
        }
    }, LASER_SPEED);
}
function superAttack() {
    if (gSuperAttack === 0) return

    gSuperAttack--
    const elSuperAttack = document.querySelector('.superAttack-container h1')
    elSuperAttack.innerHTML = `SuperAttack: <span>${gSuperAttack}</span>`

    var baseSpeed = LASER_SPEED
    var baseIcon = LASER

    LASER_SPEED = 10
    LASER = '⭐'



    shoot()

    setTimeout(() => {
        LASER = baseIcon
        LASER_SPEED = baseSpeed
    }, 10 * gHero.pos.i);


}

function explosion() {
    if (gExplosion === 0) return

    gExplosion--
    const elExploration = document.querySelector('.exploration-container h1')
    elExploration.innerHTML = `Exploration: <span>${gExplosion}</span>`

    let i = gHero.pos.i - 1
    let j = gHero.pos.j

    gHero.isShoot = true

    var baseIcon = LASER
    LASER = '💣'

    gIntervalShoot = setInterval(() => {
        if (i < 0) {
            clearInterval(gIntervalShoot)
            gHero.isShoot = false
            LASER = baseIcon
            return
        }
        let cellObj = gBoard[i][j].gameObject
        if (cellObj && cellObj.icon === ALIEN) {
            explodeArea(i, j)
            updateCell({ i, j }, null)
            clearInterval(gIntervalShoot)
            gHero.isShoot = false

            const elPoints = document.querySelector('.points-container h1')
            elPoints.innerHTML = `Points: <span>${gPoints}</span>`

            checkWinning()
            LASER = baseIcon
            return
        }
        blinkLaser({ i, j })
        i--
    }, 200);
}

function explodeArea(rowIdx, colIdx) {
    for (let i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue
        for (let j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= gBoard[i].length) continue

            let cell = gBoard[i][j].gameObject
            if (!cell) continue
            if (cell.icon !== ALIEN) continue

            updateCell({ i, j }, null)
            gGame.alienCount--
            gPoints += ALIEN_NORMAL_POINTS
        }
    }
}