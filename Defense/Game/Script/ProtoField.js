class Field {
    unit = []
    spawn = []
    end = []
    time = 0
    waveFull = []
    wave = []

    constructor() {

    }

    battleStart() {
        this.spawn = []
        this.end = []
        for (let i = 0; i < 4; i++) {
            this.spawn.push(new Spawn(new Rect2D(1000, 280 + 80 * i, 80, 80)))
            this.end.push(new End(new Rect2D(280, 280 + 80 * i, 80, 80)))
        }

        this.time = 0
        this.waveFull = JSON.parse(JSON.stringify(dataLevel[1]['wave']))
        this.wave = JSON.parse(JSON.stringify(dataLevel[1]['wave'][1]))
    }

    handleTick() {
        this.time += delta / 1000

        for (let i = 0; i < this.unit.length; i++) {
            this.unit[i].handleTick()
        }

        for (let i = 0; i < this.end.length; i++) {
            this.end[i].handleTick()
        }

        this.spawnHandle()
    }

    spawnHandle() {
        for (let i = this.wave.length - 1; i >= 0; i--) {
            if (this.time > this.wave[i][0]) {
                let indexes = sampleList([0, 1, 2, 3], this.wave[i][1].length)
                console.log(indexes)
                for (let j = 0; j < indexes.length; j++) {
                    this.spawn[indexes[j]].spawnUnit({}, this)
                }
                this.wave.splice(i, 1)
            }
        }
    }

    render() {
        for (let i = 0; i < this.spawn.length; i++) {
            this.spawn[i].render()
        }

        for (let i = 0; i < this.end.length; i++) {
            this.end[i].render()
        }

        for (let i = 0; i < this.unit.length; i++) {
            this.unit[i].render()
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

    spawnUnit(unitInfo, field) {
        let unit = new Unit()
        unit.rect.size = new Vector2D(40, 40)
        unit.rect.position = new Vector2D(this.rect.position.x, this.rect.position.y)
        unit.side = 1
        field.unit.push(unit)
    }

    handleTick() {

    }

    render() {
        strokeRectCenter(this.rect)
    }
}

class End {
    constructor(rect) {
        this.rect = rect
    }

    handleTick() {
        this.detectEnemy(field, player)
    }

    detectEnemy(field, player) {
        for (let i = field.unit.length - 1; i >= 0; i--) {
            if (this.rect.position.distance(field.unit[i].rect.position) < 10) {
                if (field.unit[i].side === 1) {
                    field.unit.splice(i, 1)
                    player.life -= 1
                }
            }
        }
    }

    render() {
        strokeRectCenter(this.rect)
    }
}