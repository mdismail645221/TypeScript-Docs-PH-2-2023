// 4-3: Inheritence

// class Student {
//     name: string;
//     age: number;
//     address: string;

//     constructor(name: string, age: number, address: string){
//         this.name= name;
//         this.age= age;
//         this.address= address
//     }

//     MakeSleep(hours:number):string{
//         return `${this.name} is sleeping on ${hours}`
//     }

// }

// এটাকে আরো simple করার জন্য আরেকটা class function তৈরি করবো ।  এবং কোড গুলোকে সুন্দর করব ।  যেমন 

class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name= name;
        this.age= age;
        this.address= address
    }

    MakeSleep(hours:number):string {
        return `${this.name} is sleeping on ${hours} hours`
    }
}

class Student extends Person {
    constructor(name:string, age: number, address:string){
        super(name, age, address)
    }
}

const student1 = new Student('Abul', 32, 'Dhaka');
console.log(student1.MakeSleep(12))






// অন্যদিকে শিক্ষকের ক্ষেত্রে
class Teacher extends Person {
    degicnation: string;
    constructor(name:  string, age: number, address: string, degicnation: string){
        super(name, age, address)
        this.degicnation= degicnation;
    }
    MakeTeacherClass(MakeOfClass:number):string{
        return `${this.name} Will take ${MakeOfClass} class for Students`
    }
}

const teacher1 = new Teacher('tasnim', 20, 'Feni', 'Jr Assistant Teacher');
console.log(teacher1.MakeTeacherClass(21))


