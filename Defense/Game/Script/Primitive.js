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

class Shape2D {
    constructor() {

    }
}

class Rect2D extends Shape2D {
    constructor(x, y, w, h) {
        super()
        this.position = new Vector2D(x, y)
        this.size = new Vector2D(w, h)
    }

    setRect(x, y, w, h) {
        this.position.x = x
        this.position.y = y
        this.size.x = w
        this.size.y = h
    }

    rectCollide(rect) {
        let distX = Math.abs(this.position.x - rect.position.x)
        let distY = Math.abs(this.position.y - rect.position.y)
        return distX < (this.size.x + rect.size.x) / 2 && distY < (this.size.y + rect.size.y) / 2
    }

    translate(vec) {
        return new Rect2D(this.position.x + vec.x, this.position.y + vec.y, this.size.x, this.size.y)
    }
}

class Circle2D extends Shape2D {
    constructor(x, y, r) {
        super()
        this.position = new Vector2D(x, y)
        this.radius = r
    }
}