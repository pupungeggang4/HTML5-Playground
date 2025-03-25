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

    battleStart() {

    }
}

class PlayerBattle {
    constructor() {
        this.deck = []
        this.hand = []
        this.crystal = []
        this.crystalHand = []
    }

    battleStart(player) {
        this.deck = []
        this.crystal = []

        for (let i = 0; i < player.deck.length; i++) {
            this.deck.push(player.deck[i].clone())
        }

        for (let i = 0; i < player.crystal.length; i++) {
            this.crystal.push(player.crystal[i].clone())
        }
    }
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