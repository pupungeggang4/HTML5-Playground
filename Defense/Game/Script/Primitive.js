class Vector2D {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    distance(vec) {
        return Math.sqrt((this.x - vec.x) ** 2 + (this.y - vec.y) ** 2)
    }

    insideRect(rect) {
        return this.x > rect.position.x - rect.size.x / 2 && this.x < rect.position.x + rect.size.x / 2 && this.y > rect.position.y - rect.size.y / 2 && this.y < rect.position.y + rect.size.y / 2
    }

    insideCircle(circle) {
        return this.distance(circle.position) < circle.r
    }
}

class Rect2D {
    constructor(x, y, w, h) {
        this.position = new Vector2D(x, y)
        this.size = new Vector2D(w, h)
    }

    setRect(x, y, w, h) {
        this.position.x = x
        this.position.y = y
        this.size.x = w
        this.size.y = h
    }
}

class Circle2D {
    constructor(x, y, r) {
        this.position = new Vector2D(x, y)
        this.radius = r
    }
}