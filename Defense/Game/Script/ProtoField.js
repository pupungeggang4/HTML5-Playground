class Field {
    unitPlayer = []
    unitPlayerTower = [
        [new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty()],
        [new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty()],
        [new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty()],
        [new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty()]
    ]
    unitEnemy = []
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
            this.spawn.push(new Spawn(new Rect2D(1080, 280 + 80 * i, 80, 80)))
            this.end.push(new End(new Rect2D(200, 280 + 80 * i, 80, 80)))
        }

        this.time = 0
        this.waveFull = JSON.parse(JSON.stringify(dataLevel[1]['wave']))
        this.wave = JSON.parse(JSON.stringify(dataLevel[1]['wave'][1]))
    }

    handleTick() {
        this.time += delta / 1000

        for (let i = 0; i < this.unitEnemy.length; i++) {
            this.unitEnemy[i].handleTick()
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
                    this.spawn[indexes[j]].spawnUnit(dataUnit[this.wave[i][1][j]], this)
                }
                this.wave.splice(i, 1)
            }
        }
    }

    render() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 10; j++) {
                let rect = new Rect2D(280 + 80 * j, 280 + 80 * i, 80, 80)
                strokeRectCenter(rect)
            }
        }

        for (let i = 0; i < this.spawn.length; i++) {
            this.spawn[i].render()
        }

        for (let i = 0; i < this.end.length; i++) {
            this.end[i].render()
        }

        for (let i = 0; i < this.unitEnemy.length; i++) {
            this.unitEnemy[i].render()
        }

        for (let i = 0; i < this.unitPlayerTower.length; i++) {
            for (let j = 0; j < this.unitPlayerTower[0].length; j++) {
                if (this.unitPlayerTower[i][j] instanceof Tower) {
                    this.unitPlayerTower[i][j].render()
                }
            }
        }
    }
}

class Spawn {
    constructor(rect) {
        this.rect = rect
    }

    spawnUnit(unitData, field) {
        let unit = new Unit(unitData)
        unit.rect.size = new Vector2D(40, 40)
        unit.rect.position = new Vector2D(this.rect.position.x, this.rect.position.y)
        field.unitEnemy.push(unit)
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
        for (let i = field.unitEnemy.length - 1; i >= 0; i--) {
            if (this.rect.position.distance(field.unitEnemy[i].rect.position) < 10) {
                field.unitEnemy.splice(i, 1)
                player.life -= 1
            }
        }
    }

    render() {
        strokeRectCenter(this.rect)
    }
}