class Player {
    life = 20
    energy = 4
    energyMax = 8
    energyGen = 1
    genLevel = 1
    genLevelMax = 5
    genUpgrade = 4

    constructor() {

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
}