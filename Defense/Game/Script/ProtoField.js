class Field {
    unit = []
    spawn = []
    end = []

    constructor() {

    }

    battleStart() {
        this.spawn = []
        this.end = []
        for (let i = 0; i < 4; i++) {
            this.spawn.push(new Spawn(new Rect2D(1000, 280 + 80 * i, 80, 80)))
            this.end.push(new End(new Rect2D(280, 280 + 80 * i, 80, 80)))
        }
    }

    render() {
        for (let i = 0; i < this.spawn.length; i++) {
            this.spawn[i].render()
        }

        for (let i = 0; i < this.end.length; i++) {
            this.end[i].render()
        }
    }
}

class Level {
    wave = []

    constructor() {
        
    }
}

class Spawn {
    constructor(rect) {
        this.rect = rect
    }

    render() {
        strokeRectCenter(this.rect)
    }
}

class End {
    constructor(rect) {
        this.rect = rect
    }

    render() {
        strokeRectCenter(this.rect)
    }
}