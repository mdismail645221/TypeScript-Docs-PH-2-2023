// 4-7: Static in Class

class Counter{
   static count : number = 0;

    constructor(count:number){
        Counter.count=count
    }

  static  increment(){
        return Counter.count = Counter.count + 1
    }

 static  decrement(){
        return Counter.count = Counter.count-1;
    }

}


// const intance1 = new Counter(0)
// const intance2 = new Counter(1)

console.log(Counter.increment())
console.log(Counter.increment())
// console.log(Counter.decrement())