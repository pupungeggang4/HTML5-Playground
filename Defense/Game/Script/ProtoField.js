class Field {
    spawnList = [[1080, 280], [1080, 360], [1080, 440], [1080, 520]]
    endList = [[200, 280], [200, 360], [200, 440], [200, 520]]

    unitPlayer = []
    unitPlayerTower = [
        [new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty()],
        [new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty()],
        [new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty()],
        [new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty(), new Empty()]
    ]
    unitEnemy = []
    projectile = []

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
            this.spawn.push(new Spawn(new Rect2D(this.spawnList[i][0], this.spawnList[i][1], 80, 80)))
            this.end.push(new End(new Rect2D(this.endList[i][0], this.endList[i][1], 80, 80)))
        }

        this.time = 0
        this.waveFull = JSON.parse(JSON.stringify(dataLevel[1]['wave']))
        this.wave = JSON.parse(JSON.stringify(dataLevel[1]['wave'][1]))
    }

    handleTick() {
        this.time += delta / 1000

        for (let i = 0; i < this.unitPlayerTower.length; i++) {
            for (let j = 0; j < this.unitPlayerTower[0].length; j++) {
                if (this.unitPlayerTower[i][j] instanceof Tower) {
                    this.unitPlayerTower[i][j].handleTick(this)
                }
            }
        }

        for (let i = 0; i < this.unitEnemy.length; i++) {
            this.unitEnemy[i].handleTick(this)
        }

        for (let i = 0; i < this.projectile.length; i++) {
            this.projectile[i].handleTick(this)
        }

        for (let i = 0; i < this.end.length; i++) {
            this.end[i].handleTick()
        }

        this.spawnHandle()
        this.deathHandle()
        this.projectileHandle()
    }

    spawnHandle() {
        for (let i = this.wave.length - 1; i >= 0; i--) {
            if (this.time > this.wave[i][0]) {
                let indexes = sampleList([0, 1, 2, 3], this.wave[i][1].length)
                for (let j = 0; j < indexes.length; j++) {
                    this.spawn[indexes[j]].spawnUnit(dataUnit[this.wave[i][1][j]], this)
                }
                this.wave.splice(i, 1)
            }
        }
    }

    deathHandle() {
        for (let i = 0; i < this.unitPlayerTower.length; i++) {
            for (let j = 0; j < this.unitPlayerTower[0].length; j++) {
                if (this.unitPlayerTower[i][j] instanceof Tower) {
                    if (this.unitPlayerTower[i][j].hp <= 0) {
                        this.unitPlayerTower[i][j] = new Empty()
                    }
                }
            }
        }

        for (let i = this.unitEnemy.length - 1; i >= 0; i--) {
            if (this.unitEnemy[i].hp <= 0) {
                this.unitEnemy.splice(i, 1)
            }
        }
    }

    projectileHandle() {
        for (let i = this.projectile.length - 1; i >= 0; i--) {
            let p = this.projectile[i]
            if (p.side === 0) {
                for (let j = 0; j < this.unitEnemy.length; j++) {
                    if (p.rect.position.insideRect(this.unitEnemy[j].rect)) {
                        this.unitEnemy[j].hp -= p.damage
                        this.projectile.splice(i, 1)
                        break
                    }
                }
            }

            if (p.rect.position.x < -40 || p.rect.position.x > 1200) {
                this.projectile.splice(i, 1)
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

        for (let i = 0; i < this.projectile.length; i++) {
            this.projectile[i].render()
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