// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius + this.radius
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
       return Math.PI * this.radius**2
    }

    set diameter(newDiameter) {
        this.radius = newDiameter / 2
    }

    set circumference(newCirc) {
        this.radius = (newCirc / Math.PI)/2
    }
}