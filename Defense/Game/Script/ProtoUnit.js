class UnitLike {
    constructor() {

    }
}

class Empty extends UnitLike {
    constructor() {
        super()
    }
}

class Unit extends UnitLike {
    constructor(data) {
        super()
        this.side = 1
        this.rect = new Rect2D(0, 0, 0, 0)

        let dataCopy = JSON.parse(JSON.stringify(data))

        this.ID = dataCopy['ID']
        this.attack = dataCopy['attack']
        this.attackSpeed = dataCopy['attack_speed']
        this.weapon = new Weapon(JSON.parse(JSON.stringify(dataWeapon[dataCopy['weapon']])))
        this.hp = dataCopy['hp']
        this.hpMax = dataCopy['hp']
        this.moveStyle = dataCopy['move_style']
        this.speed = dataCopy['speed']

        this.attackRecharge = 0
        this.ability = []

        this.status = 'move'

        this.hpStart = [0, 0]
    }

    handleTick(field) {
        this.status = 'move'
        if (this.moveStyle === 'simple') {
            for (let i = 0; i < field.unitPlayerTower.length; i++) {
                for (let j = 0; j < field.unitPlayerTower[0].length; j++) {
                    if (field.unitPlayerTower[i][j] instanceof Tower) {
                        if (this.rect.position.insideRect(field.unitPlayerTower[i][j].rect)) {
                            this.status = 'attack'
                        }
                    }
                }
            }
        }
        this.moveHandle()
        this.attackHandle(field)
    }

    moveHandle() {
        if (this.status === 'move') {
            this.rect.position.x -= this.speed * delta / 1000
        }
    }

    attackHandle(field) {
        this.weapon.rangeCurrent = this.weapon.range.translate(this.rect.position)

        this.attackRecharge -= delta / 1000
        if (this.attackRecharge < 0) {
            this.attackRecharge = 0
        }

        if (this.status === 'attack') {
            if (this.attackRecharge <= 0) {
                this.attackWeapon(field)
            }
        }
    }

    attackWeapon(field) {
        if (this.weapon.attack === 'single') {
            for (let i = 0; i < field.unitPlayerTower.length; i++) {
                for (let j = 0; j < field.unitPlayerTower[0].length; j++) {
                    if (field.unitPlayerTower[i][j] instanceof Tower) {
                        if (field.unitPlayerTower[i][j].side != this.side && field.unitPlayerTower[i][j].rect.position.insideRect(this.weapon.rangeCurrent)) {
                            field.unitPlayerTower[i][j].hp -= this.attack
                            this.attackRecharge = this.attackSpeed
                        }
                    }
                }
            }
        }
    }

    render() {
        strokeRectCenter(this.rect)
        
        this.hpStart = [this.rect.position.x - 32, this.rect.position.y - 32]
        context.fillStyle = 'Black'
        context.fillRect(this.hpStart[0], this.hpStart[1], 64, 8)
        context.fillStyle = 'Green'
        context.fillRect(this.hpStart[0], this.hpStart[1], 64 * this.hp / this.hpMax, 8)
    }
}

class Tower extends UnitLike {
    constructor(card) {
        super()
        this.side = 0
        this.dataCopy = JSON.parse(JSON.stringify(card))
        this.rect = new Rect2D(0, 0, 0, 0)

        this.ID = this.dataCopy.ID
        this.attack = this.dataCopy.attack
        this.attackSpeed = this.dataCopy.attackSpeed
        this.hp = this.dataCopy.hp
        this.hpMax = this.dataCopy.hp
        this.moveStyle = this.dataCopy.moveStyle
        this.speed = this.dataCopy.speed
        this.weapon = new Weapon(JSON.parse(JSON.stringify(dataWeapon[this.dataCopy['weapon']])))

        this.attackRecharge = 0
        this.ability = []

        this.hpStart = [0, 0]
    }

    handleTick(field) {
        this.attackRecharge -= delta / 1000
        if (this.attackRecharge <= 0) {
            this.attackRecharge = 0
        }
        
        this.weapon.rangeCurrent = this.weapon.range.translate(this.rect.position)
        if (this.attackRecharge <= 0) {
            this.attackWeapon(field)
        }
    }

    attackWeapon(field) {
        if (this.weapon.attack === 'projectile') {
            for (let i = 0; i < field.unitEnemy.length; i++) {
                if (field.unitEnemy[i].rect.position.insideRect(this.weapon.rangeCurrent)) {
                    field.projectile.push(new Projectile(this.rect))
                    this.attackRecharge = this.attackSpeed
                    break
                }
            }
        }
    }

    render() {
        context.fillStyle = 'Blue'
        fillRectCenter(this.rect)
        context.fillStyle = 'Black'

        this.hpStart = [this.rect.position.x - 32, this.rect.position.y - 40]
        context.fillStyle = 'Black'
        context.fillRect(this.hpStart[0], this.hpStart[1], 64, 8)
        context.fillStyle = 'Green'
        context.fillRect(this.hpStart[0], this.hpStart[1], 64 * this.hp / this.hpMax, 8)
    }
}

class Weapon {
    constructor(data) {
        this.attack = data['attack']
        this.range = new Rect2D(data['range'][0], data['range'][1], data['range'][2], data['range'][3])
        this.rangeCurrent = new Rect2D(0, 0, 0, 0)
    }
}

class Projectile {
    constructor(rect) {
        this.rect = new Rect2D(rect.position.x, rect.position.y, 20, 20)
        this.direction = 'right'
        this.speed = 200
        this.side = 0
        this.damage = 10
    }

    handleTick() {
        this.move()
    }

    move() {
        if (this.direction === 'right') {
            this.rect.position.x += this.speed * delta / 1000
        }
    }

    render() {
        strokeRectCenter(this.rect)
    }
}