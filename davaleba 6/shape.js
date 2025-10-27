class Shape{
    constructor(name){
        this.name = name;
    }
    area(){
        console.log("Area calculation not implemented for generic shape.");
    }
}
class Circle extends Shape{
    constructor(name, radius){
        super(name);
        this.radius = radius;
    }
    area(){
        console.log(`${this.name} area: ${Math.PI *  this.radius ** 2}`);
        return Math.PI *  this.radius * this.radius;
    }
}
class Square extends Shape{
    constructor(name, side){
        super(name);
        this.side = side;
    }
    area(){
        console.log(`${this.name} area: ${this.side ** 2}`);
    }
}
class Triangle extends Shape{
    constructor(name, base, height){
        super(name);
        this.base = base;
        this.height = height;
    }
    area(){
        console.log(`${this.name} area: ${this.base * this.height / 2}`);
    }
}

const circle = new Circle("circle", 3);
const square = new Square("square", 5);
const triangle = new Triangle("triangle", 5, 15);

circle.area();
square.area();
triangle.area();
