class Field {
    floor = []
    thing = []
    size = [0, 0]
    goal = [0, 0]

    constructor() {
        this.player = new Player()
    }

    loadLevel(level) {
        let floor = level['floor']
        let thing = level['thing']

        this.size = [level['size'][0], level['size'][1]]
        this.renderStart = new Vector2D(672 - 32 * this.size[1], 432 - 32 * this.size[0])
        this.floor = []
        this.thing = []

        for (let i = 0; i < this.size[0]; i++) {
            let tempFloor = []
            let tempThing = []
            for (let j = 0; j < this.size[1]; j++) {
                tempFloor.push(new EmptyFloor())
                tempThing.push(new EmptyThing())
            }
            this.floor.push(tempFloor)
            this.thing.push(tempThing)
        }

        for (let i = 0; i < level['thing'].length; i++) {
            let tmpThing = level['thing'][i]
            if (tmpThing['type'] === 'wall') {
                this.thing[tmpThing['position'][0]][tmpThing['position'][1]] = new Wall()
            }
        }

        this.player.position = [level['start'][0], level['start'][1]]
        this.thing[level['start'][0]][level['start'][1]] = this.player
        this.goal = [level['goal'][0], level['goal'][1]]
    }

    winCheck() {
        if (this.player.position[0] === this.goal[0] && this.player.position[1] === this.goal[1]) {
            return true
        }

        return false
    }

    render() {
        let tempRect = new Rect2D(this.renderStart.x, this.renderStart.y, UI.puzzle.cellSize[0], UI.puzzle.cellSize[0])
        for (let i = 0; i < this.size[0]; i++) {
            for (let j = 0; j < this.size[1]; j++) {
                if (this.thing[i][j] instanceof Player) {
                    fillRectCenter(tempRect)
                }
                if (this.thing[i][j] instanceof Wall) {
                    context.fillStyle = 'Green'
                    fillRectCenter(tempRect)
                    context.fillStyle = 'Black'
                }
                if (i === this.goal[0] && j === this.goal[1]) {
                    context.fillStyle = 'Blue'
                    fillRectCenter(tempRect)
                    context.fillStyle = 'Black'
                }
                strokeRectCenter(tempRect)
                tempRect.position.x += UI.puzzle.cellSize[0]
            }
            tempRect.position.y += UI.puzzle.cellSize[1]
            tempRect.position.x = this.renderStart.x
        }
    }
}

class Floor {
    constructor() {

    }
}

class EmptyFloor extends Floor {
    constructor() {
        super()

    }
}

class Thing {
    constructor() {
        this.solid = true
        this.slide = true
    }
}

class EmptyThing extends Thing {
    constructor() {
        super()
        this.solid = false
        this.slide = false
    }
}

class Wall extends Thing {
    constructor() {
        super()
        this.solid = true
        this.slide = false
    }
}

class Player extends Thing {
    position = [0, 0]
    moveSet = {'Up': [-1, 0], 'Left': [0, -1], 'Down': [1, 0], 'Right': [0, 1]}
    
    constructor() {
        super()
        this.position = [0, 0]
    }

    move(direction, field) {
        let tmpPos = [this.position[0] + this.moveSet[direction][0], this.position[1] + this.moveSet[direction][1]]
        if (this.insideField(tmpPos, field)) {
            if (field.thing[tmpPos[0]][tmpPos[1]].solid === false) {
                let move1 = [this.position[0] + this.moveSet[direction][0], this.position[1] + this.moveSet[direction][1]]
                let move2 = [this.position[0] + this.moveSet[direction][0] * 2, this.position[1] + this.moveSet[direction][1] * 2]

                let tmp = field.thing[this.position[0]][this.position[1]]
                field.thing[this.position[0]][this.position[1]] = field.thing[move1[0]][move1[1]]
                field.thing[move1[0]][move1[1]] = tmp
                this.position = move1
            }
        }
    }

    insideField(pos, field) {
        return pos[0] >= 0 && pos[0] < field.size[0] && pos[1] >= 0 && pos[1] < field.size[1]
    }
}