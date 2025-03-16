class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    distance(vec) {
        return Math.sqrt((vec.x - this.x) ** 2 + (vec.y - this.y) ** 2)
    }
}

class Rect2D {
    constructor(x, y, w, h) {
        this.position = new Vector2D(x, y)
        this.size = new Vector2D(w, h)
    }
}