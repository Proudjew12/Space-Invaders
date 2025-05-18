'use strict'

const HERO = '🤡'
const LASER = '🎇'
const LASER_SPEED = 80

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
        updateCell(pos, null)
    }, LASER_SPEED);

} 
