class Unit {
    constructor() {
        this.side = 0
        this.rect = new Rect2D(0, 0, 0, 0)
        this.speed = 320
    }

    handleTick() {
        this.move()
    }

    move() {
        this.rect.position.x -= this.speed * delta / 1000
    }

    render() {
        strokeRectCenter(this.rect)
    }
}