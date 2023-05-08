// 4-8: Polymorphism

class Persion {
    takeNap(){
        console.log(`I'M Sleeping At 8 Hours Per Day`)
    }
}

class Student extends Persion   {
    takeNap(): void {
        console.log(`I Am Sleeping At 10 Hours Per Day`)
    }
}

class Developer extends Persion {
    takeNap(): void {
        console.log(`I Am Sleeping At 6 Hours Per Day`)
    }
}

function getNep (param: Persion){
    param.takeNap()
}

const person1 = new Persion();
const person2 = new Student()
const person3 = new Developer()

// getNep(person1)
// getNep(person2)
// getNep(person3)


// উদাহরণ: 2

class Shape {
    getArea ():number{
        return 0
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number){
        super()
        this.radius= radius;
    }

    getArea(): number {
        return  Math.PI * this.radius * this.radius
    }
}

class Regtangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number){
        super()
        this.height = height;
        this.width= width;
    }

    getArea(): number {
        return this.height * this.width
    }
}

function getAreaOfShape(param: Shape){
    console.log(param.getArea())
}

console.log(getAreaOfShape(new Circle(10)))
console.log(getAreaOfShape(new Regtangle(10, 10)))






