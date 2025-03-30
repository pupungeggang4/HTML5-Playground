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
        this.startHandChange = [false, false, false]
    }

    battleStart(player) {
        this.deck = []
        this.crystal = []

        for (let i = 0; i < player.deck.length; i++) {
            this.deck.push(player.deck[i].cloneToCardBattle())
        }

        this.deck = shuffle(this.deck)

        for (let i = 0; i < player.crystal.length; i++) {
            this.crystal.push(player.crystal[i].clone())
        }
    }

    changeStartHand() {
        let index = Math.floor(Math.random() * (this.deck.length - 5)) + 3
        for (let i = 0; i < 3; i++) {
            if (this.startHandChange[i] === true) {
                let temp = this.deck[i]
                this.deck[i] = this.deck[index + i]
                this.deck[index + i] = temp
            }
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