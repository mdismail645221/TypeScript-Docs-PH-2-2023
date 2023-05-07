// 4-1: Introduction To Object Oriented Programming

// অবজেক্ট প্যাটার্নে কোড লেখাকে বলা হয়---->  অবজেক্ট অরিয়েন্ট প্রোগ্রামিং 


// Encapsulation 
// Polymorphism
// Abstraction
// inheritance
// এগুলোকে বলা হয় Building Blocks 

// 4-2: How to Create Class, Object , Parameter Properties
 
// class Animal1 {
//     name: string;
//     species: string;
//     sounds: string;

//     constructor(name: string, species: string, sounds: string){
//         this.name= name;
//         this.species= species;
//         this.sounds=sounds
//     }

//     MakeSounds(){
//         console.log(`${this.name} is say ${this.species} ${this.sounds}`)
//     }

// }

// const dog = new Animal1('raju', 'dog', 'gew gew')
// console.log(dog.MakeSounds())


// এই class Oriented object কে আরো সহজে লিখা যায় । যেমন...
class Animal1 {
    constructor(
        public name: string, 
        public species: string,
        public sounds: string){
    }
   public MakeSounds():void{
        console.log(`${this.name} is say ${this.species} ${this.sounds}`)
    }

}

const dog = new Animal1('raju', 'dog', 'gew gew')
const cat = new Animal1('tasnim', 'cat', 'mew mew')
console.log(dog.MakeSounds())
console.log(cat.MakeSounds())