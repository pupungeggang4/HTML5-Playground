let canvas
let context

let gameLoop
let frameCurrent
let framePrevious
let delta

let scene = 'title'
let state = 'init'
let menu = false

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
let battle
let field
let camera
