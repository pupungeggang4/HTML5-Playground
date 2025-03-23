class Battle {
    turn = 1
    unit = []
    monsterID = -1

    constructor() {
        this.unit = [
            new EmptyUnit(),
            new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(),
            new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(), new EmptyUnit(),
            new EmptyUnit()
        ]
    }
}

class PlayerBattle {
    
}

class Thing {
    constructor() {

    }
}

class EmptyUnit extends Thing {
    constructor() {
        super()
    }
}

class Unit extends Thing {
    hp = 0
    attack = 0
    
    constructor() {
        super()
    }
}

class Leader extends Unit {
    constructor() {
        super()
    }
}