// 4-9: Abstraction

// abstract    2 ভাবে করা যায়। 
// 1. interface মাধ্যমে
 
// interface IVicale {
//     name:string;
//     age: number;
// }

// const Vicale : IVicale = {
//     name: 'abc',
//     age:1
// }


interface IVicale {
    startingEngine():void;
    stopEngine():void;
    move():void;
} 

class Vicale implements IVicale {
    startingEngine(): void {
        console.log(`I am Starting Engine`)
    }
    stopEngine(): void {
        console.log(`I am Stop Engine`)
    }
    move(): void {
        console.log('I am Moving Function')
    }
    test(){
        console.log(`I am TEST   PURPOSE`)
    }
}



// 2. abstract class মাধ্যমে 

