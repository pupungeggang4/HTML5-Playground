let canvas
let context

let gameLoop
let frameCurrent
let framePrevious
let delta

let scene = 'title'
let state = 'init'
let menu = false

let infoRenderMode = 'profile'

let keyPress = {
    'left': false,
    'right': false,
    'up': false,
    'down': false
}

let save = {

}

let game
let player
let playerField
let playerBattle

let battle
let enemyBattle

let field
let camera
