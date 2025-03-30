class Player {
    life = 20
    energy = 4
    energyMax = 8
    energyGen = 1
    genLevel = 1
    genLevelMax = 5
    genUpgrade = 4

    hand = []
    deck = []
    selectedIndex = -1

    constructor() {

    }

    battleStart() {
        this.hand = [new Card(dataCard[1]), new Card(dataCard[1]), new Card(dataCard[1]), new Card(dataCard[1])]
    }

    handleTick() {
        this.energyHandle()
    }

    energyHandle() {
        this.energy += this.energyGen * delta / 1000
        if (this.energy > this.energyMax) {
            this.energy = this.energyMax
        }
    }

    upgrade() {
        if (this.genLevel < this.genLevelMax && this.energy >= this.genUpgrade) {
            this.genLevel += 1
            this.energy -= this.genUpgrade

            this.energyMax += 2
            this.energyGen += 0.5
            this.genUpgrade += 2
        }
    }

    playCard(row, col, field) {
        if (this.energy >= this.hand[this.selectedIndex].energy) {
            if (this.hand[this.selectedIndex].type === 'unit') {
                if (field.unitPlayerTower[row][col] instanceof Empty) {
                    this.summonUnit(row, col, this.hand[this.selectedIndex], field)
                    this.energy -= this.hand[this.selectedIndex].energy
                    this.hand.splice(this.selectedIndex, 1)
                }
            }
        }
        this.selectedIndex = -1
    }

    summonUnit(row, col, card, field) {
        let unit = new Tower(card)
        unit.rect.position = new Vector2D(280 + 80 * col, 280 + 80 * row)
        unit.rect.size = new Vector2D(80, 80)
        field.unitPlayerTower[row][col] = unit
    }
}