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
        this.spawn[0].spawnUnit({}, this)
        this.spawn[1].spawnUnit({}, this)
        this.spawn[2].spawnUnit({}, this)
        this.spawn[3].spawnUnit({}, this)
    }

    handleTick() {
        for (let i = 0; i < this.unit.length; i++) {
            this.unit[i].handleTick()
        }

        for (let i = 0; i < this.spawn.length; i++) {
            this.spawn[i].handleTick()
        }

        for (let i = 0; i < this.end.length; i++) {
            this.end[i].handleTick()
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