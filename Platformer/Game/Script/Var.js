let canvas
let context

let gameLoop
let frameCurrent
let framePrevious
let delta

let scene = 'title'
let state = 'start'
let menu = false

let keyPress = {
    'left': false, 'right': false, 'up': false, 'down': false
}

let cursor = {
    title: 0,
}

let game
let player
let field
let camera
